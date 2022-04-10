// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1NvlObVf_7E5Aax7NojtbMp3_6cWwJMQ",
  authDomain: "edurise-a8996.firebaseapp.com",
  projectId: "edurise-a8996",
  storageBucket: "edurise-a8996.appspot.com",
  messagingSenderId: "764296325709",
  appId: "1:764296325709:web:ef9204dcc244c835a6ca04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authentication = getAuth(app);