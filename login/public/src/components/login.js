// backend.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { firebaseConfig } from "/src/config/firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded");

  const googleBtn = document.getElementById("login-btn");
  const emailLoginBtn = document.getElementById("email-login-btn");
  const emailSignupBtn = document.getElementById("email-signup-btn");

  if (googleBtn) {
    googleBtn.addEventListener("click", loginWithGoogle);
    console.log("Google login button listener attached");
  }

  if (emailLoginBtn) {
    emailLoginBtn.addEventListener("click", signInWithEmail);
  }

  if (emailSignupBtn) {
    emailSignupBtn.addEventListener("click", signUpWithEmail);
  }
});

function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google user signed in:", user);
      window.location.href = "./public/home.html";
    })
    .catch((error) => {
      console.error("Google sign in error:", error.message);
    });
}

function signUpWithEmail() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Sign up successful!");
    })
    .catch((error) => {
      console.error("Signup error:", error.message);
      alert("Signup failed: " + error.message);
    });
}

function signInWithEmail() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  console.log("Logging in with:", email, "(password length:", password.length + ")");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed in:", user);
      window.location.href = "./src//home.html"; 
    })
    .catch((error) => {
      console.error("Signin error:", error.code, error.message);
      alert("Sign in failed: " + error.code + " - " + error.message);
    });
}