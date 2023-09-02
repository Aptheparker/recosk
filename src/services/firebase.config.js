import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
// 	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
// 	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
// 	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
// 	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
// 	appId: import.meta.env.VITE_FIREBASE_APP_ID,
// 	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
	apiKey: 'AIzaSyCFxW7exp1dO6c6QkyTnJ12IBKaAnBFKWI',
	authDomain: 'kiosk-86e88.firebaseapp.com',
	projectId: 'kiosk-86e88',
	storageBucket: 'kiosk-86e88.appspot.com',
	messagingSenderId: '170252573353',
	appId: '1:170252573353:web:3bbaab7c042789820e67b8',
	measurementId: 'G-BZYK4W263T',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
