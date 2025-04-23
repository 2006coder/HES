import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Firebase configuration for authentication project
// Replace these values with your actual authentication Firebase project config
const authFirebaseConfig = {
    apiKey: "AIzaSyB3WIJyjFv_KmAEzB0pK0AfEIsuK3ArKlM",
    authDomain: "searchengine-8ec0f.firebaseapp.com",
    projectId: "searchengine-8ec0f",
    storageBucket: "searchengine-8ec0f.firebasestorage.app",
    messagingSenderId: "747507579916",
    appId: "G-6ED7QYYJ7H"
};

// Initialize Firebase Authentication app
const authApp = initializeApp(authFirebaseConfig, "auth");
const auth = getAuth(authApp);

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

export { auth };