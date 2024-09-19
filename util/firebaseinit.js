// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBrh4wpJg4bsi25oqYhPkHmC6OYonQnBmk",
  authDomain: "fortune-project-91fb6.firebaseapp.com",
  projectId: "fortune-project-91fb6",
  storageBucket: "fortune-project-91fb6.appspot.com",
  messagingSenderId: "47914897025",
  appId: "1:47914897025:web:519ddbf6e800af665ec780",
  measurementId: "G-TEMG1RMFB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);