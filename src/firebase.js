// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeLdXw3GdRO4v0y7hbQ-Q4jlQitF-eoWI",
  authDomain: "frigroup-social.firebaseapp.com",
  projectId: "frigroup-social",
  storageBucket: "frigroup-social.appspot.com",
  messagingSenderId: "708547139964",
  appId: "1:708547139964:web:32f271030ffad5dffdacf9",
  measurementId: "G-WJ28QY5TNY"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Database ref
const db = getFirestore();

export {db};