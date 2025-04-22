// signup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { firebaseConfig } from '/src/config/firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

window.addEventListener("DOMContentLoaded", () => {
  console.log("Signup DOM loaded");

  const googleBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("email-signup-btn");

  if (googleBtn) {
    googleBtn.addEventListener("click", SignInWithGoogle);
    console.log("Google login button listener attached");
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", signUpWithEmail);
  }
});

function SignInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("Google user signed up:", user);
      window.location.href = "./public/home.html";
    })
    .catch((error) => {
      console.error("Google sign up error:", error.message);
    });
}

function signUpWithEmail() {
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;

  if (!email || !password1 || !password2) {
    alert("Please fill in all fields.");
    return;
  }

  if (password1 !== password2) {
    alert("Passwords do not match.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password1)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Email user signed up:", user);
      alert("Sign up successful!");
      window.location.href = "./public//home.html";
    })
    .catch((error) => {
      console.error("Sign up error:", error.message);
      alert("Error: " + error.message);
    });
}
