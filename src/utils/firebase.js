// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj2useVGCIDXqPEDE-p3uCUpvCU9XdlJg",
  authDomain: "nwtflixgpt.firebaseapp.com",
  projectId: "nwtflixgpt",
  storageBucket: "nwtflixgpt.appspot.com",
  messagingSenderId: "320913028816",
  appId: "1:320913028816:web:71b3a34849bc314d22d0d5",
  measurementId: "G-JR6H0Z6X7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();