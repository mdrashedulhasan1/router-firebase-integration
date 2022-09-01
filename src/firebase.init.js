// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLmnzqEF-lQ_PIAW9Y7O8nOaRShpDM3m4",
  authDomain: "router-firebase-intregate-v2.firebaseapp.com",
  projectId: "router-firebase-intregate-v2",
  storageBucket: "router-firebase-intregate-v2.appspot.com",
  messagingSenderId: "563162141862",
  appId: "1:563162141862:web:86328c63857d2879a89067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;