// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "nestal.firebaseapp.com",
    projectId: "nestal",
    storageBucket: "nestal.appspot.com",
    messagingSenderId: "180478288761",
    appId: "1:180478288761:web:12e453db4905d8118f05a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);