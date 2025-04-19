import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// firebase configuration
// const firebaseConfig = {
//   apiKey: "....",
//   authDomain: "projectname.firebaseapp.com",
//   projectId: "projectname",
//   storageBucket: "projectname.appspot.com",
//   messagingSenderId: "....",
//   appId: "...."
// };

const firebaseConfig = {
  apiKey: "AIzaSyDBpRz3lE0jlmL2ypy3RbtY5TI3VTUFgDQ",
  authDomain: "hes-webapp-a88a5.firebaseapp.com",
  projectId: "hes-webapp-a88a5",
  storageBucket: "hes-webapp-a88a5.firebasestorage.app",
  messagingSenderId: "912243504272",
  appId: "1:912243504272:web:fd3ed4e147b3b681d3d415",
  measurementId: "G-GQKT29D1NY"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// log to console to know if this shit is working or not.
console.log("Firebase initialized with project:", firebaseConfig.projectId);

// find medical facilities based on keywords and location
export const findMedicalFacilities = async (keywords, location) => {
  try {
    console.log("Searching facilities with keywords:", keywords);
    console.log("User location:", location);
    const facilitiesRef = collection(db, "facilities");
    console.log("Fetching all facilities first to verify data exists...");
    const allFacilitiesQuery = query(facilitiesRef, limit(10));
    const allSnapshot = await getDocs(allFacilitiesQuery);
    console.log(`Found ${allSnapshot.size} total facilities in database`);
    
    const facilitiesQuery = query(
      facilitiesRef,
      where("specialties", "array-contains-any", keywords),
      orderBy("rating", "desc"),
      limit(10)
    );
    
    const snapshot = await getDocs(facilitiesQuery);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching medical facilities:", error);
    return [];
  }
};

export { app, db, auth };
