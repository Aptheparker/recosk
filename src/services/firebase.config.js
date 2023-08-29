import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "recosk-menu.firebaseapp.com",
  projectId: "recosk-menu",
  storageBucket: "recosk-menu.appspot.com",
  messagingSenderId: "512761099495",
  appId: "1:512761099495:web:976c597e4c5617fae15e42",
  measurementId: "G-D4MDW2WV2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);