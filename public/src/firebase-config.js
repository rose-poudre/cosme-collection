import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "rikejo-cosme.firebaseapp.com",
  projectId: "rikejo-cosme",
  storageBucket: "rikejo-cosme.appspot.com",
  messagingSenderId: "124449810798",
  appId: "1:124449810798:web:78f501d7ca3bad5db0397f",
  measurementId: "G-ZXWQPGX7B7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
