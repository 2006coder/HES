import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { calculateDistance } from "../utils/geoUtils";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjR9cgbaO90SR-Dy2k2UTDCh0i-Kpx_Y",
  authDomain: "hes-bach.firebaseapp.com",
  projectId: "hes-bach",
  storageBucket: "hes-bach.appspot.com",
  messagingSenderId: "648794465181",
  appId: "1:648794465181:web:6f2336924af1f019f5c574"
};

// ensure Firebase is only initialized once
let app;
let db;
let auth;

// Initialize Firebase if not already initialized
if (!app) {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    console.log("Firebase initialized with project:", firebaseConfig.projectId);
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
}

// Add this function to geocode facility addresses
const geocodeFacilityAddress = async (address) => {
  try {
    console.log("Geocoding facility address:", address);
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
    );
    
    if (!response.ok) {
      throw new Error('Geocoding failed');
    }
    
    const data = await response.json();
    
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    } else {
      throw new Error('Location not found');
    }
  } catch (error) {
    console.error('Geocoding error for facility:', error);
    return null;
  }
};

// Authentication methods
export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
};

export const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, user: userCredential.user };
  } catch (error) {
    console.error("Registration error:", error.message);
    return { success: false, error: error.message };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error.message);
    return { success: false, error: error.message };
  }
};

// Find medical facilities based on keywords and location
export const findMedicalFacilities = async (keywords, location) => {
  try {
    console.log("Searching facilities with keywords:", keywords);
    console.log("User location:", location);
    
    if (!db) {
      console.error("Firebase database not initialized");
      return [];
    }
    
    const facilitiesRef = collection(db, "facilities");
    const facilitiesQuery = query(
      facilitiesRef,
      where("specialties", "array-contains-any", keywords),
      orderBy("rating", "desc"),
      limit(10)
    );
    
    const snapshot = await getDocs(facilitiesQuery);
    
    // Get facilities
    const facilities = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Calculate distances if user location is available
    if (location && location.lat && location.lng) {
      const userLat = location.lat;
      const userLng = location.lng;
      
      // Process facilities with a delay between geocoding requests to avoid rate limiting
      const facilitiesWithDistance = [];
      
      for (const facility of facilities) {
        if (facility.coords && facility.coords.lat && facility.coords.lng) {
          // Already has coordinates
          const distance = calculateDistance(
            userLat, 
            userLng, 
            facility.coords.lat, 
            facility.coords.lng
          );
          facilitiesWithDistance.push({ ...facility, distance });
        } else if (facility.address) {
          // Need to geocode the address
          try {
            // Add a small delay to avoid rate limiting with the geocoding service
            await new Promise(resolve => setTimeout(resolve, 300));
            const coords = await geocodeFacilityAddress(facility.address);
            
            if (coords) {
              const distance = calculateDistance(
                userLat, 
                userLng, 
                coords.lat, 
                coords.lng
              );
              // Add distance and newly geocoded coordinates
              facilitiesWithDistance.push({ 
                ...facility, 
                distance,
                coords: coords // Update coords so they're available for display
              });
            } else {
              // If geocoding failed, still include facility but without distance
              facilitiesWithDistance.push(facility);
            }
          } catch (error) {
            console.error("Error geocoding facility address:", error);
            facilitiesWithDistance.push(facility);
          }
        } else {
          // No address available
          facilitiesWithDistance.push(facility);
        }
      }
      
      return facilitiesWithDistance;
    }
    
    return facilities;
  } catch (error) {
    console.error("Error fetching medical facilities:", error);
    return [];
  }
};

export { app, db, auth };