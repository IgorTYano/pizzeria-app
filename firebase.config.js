import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase-auth';

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBTLkHy8QdHB0ROneNYciRpVO0Y0qtuD-M',

	authDomain: 'pizzeria-app-40428.firebaseapp.com',

	projectId: 'pizzeria-app-40428',

	storageBucket: 'pizzeria-app-40428.firebasestorage.app',

	messagingSenderId: '364827021482',

	appId: '1:364827021482:web:9d419efc970ef1a47f80d3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and create reference
export const auth = getAuth(app);
