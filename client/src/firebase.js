// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2a6e5.firebaseapp.com",
  projectId: "mern-estate-2a6e5",
  storageBucket: "mern-estate-2a6e5.firebasestorage.app",
  messagingSenderId: "836054207946",
  appId: "1:836054207946:web:4569161722c7088a41d333"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
