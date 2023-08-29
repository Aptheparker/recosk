import { initializeApp } from 'firebase/app';
import { getFireStore } from 'firebase/firestore';

const { VITE_FIREBASE_API_KEY } = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'kiosk-86e88.firebaseapp.com',
  projectId: 'kiosk-86e88',
  storageBucket: 'kiosk-86e88.appspot.com',
  messagingSenderId: '170252573353',
  appId: '1:170252573353:web:3bbaab7c042789820e67b8',
  measurementId: 'G-BZYK4W263T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore(app);
