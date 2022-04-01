// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "rikejo-cosme.firebaseapp.com",
  projectId: "rikejo-cosme",
  storageBucket: "rikejo-cosme.appspot.com",
  messagingSenderId: "124449810798",
  appId: "1:124449810798:web:78f501d7ca3bad5db0397f",
  measurementId: "G-ZXWQPGX7B7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export const db = getFirestore(app);
