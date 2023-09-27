// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiRLf1OxAb4C9-hE0FNiHgrrvupxBkElw",
  authDomain: "pomodor-77d4d.firebaseapp.com",
  projectId: "pomodor-77d4d",
  storageBucket: "pomodor-77d4d.appspot.com",
  messagingSenderId: "676642307635",
  appId: "1:676642307635:web:1e7537eacceb200a332d46",
  measurementId: "G-HB5BLR9PD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)