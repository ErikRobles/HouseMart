import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0uvhnmePudGZvliHayISh31r5We4_3U8',
  authDomain: 'housemart-dfe53.firebaseapp.com',
  projectId: 'housemart-dfe53',
  storageBucket: 'housemart-dfe53.appspot.com',
  messagingSenderId: '14960779762',
  appId: '1:14960779762:web:8555d68b2bc79e9cc38b6b',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
