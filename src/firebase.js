// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Vérifie cette ligne

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByy-yoaM5CS-Yy6cuMczzo_TT_IlqEcB8",
  authDomain: "student-notes-704.firebaseapp.com",
  projectId: "student-notes-704",
  storageBucket: "student-notes-704.firebasestorage.app",
  messagingSenderId: "278451530846",
  appId: "1:278451530846:web:20c6a40c9f9be14c7c58cf",
  measurementId: "G-EBQ0ZTVL83"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore
export const db = getFirestore(app);