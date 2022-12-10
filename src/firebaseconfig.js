// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSdaoizbayd0j9SUY5mBkgcysUbZBiKMw",
  authDomain: "covidguide2022.firebaseapp.com",
  projectId: "covidguide2022",
  storageBucket: "covidguide2022.appspot.com",
  messagingSenderId: "339554093642",
  appId: "1:339554093642:web:5f15bd0b728dee73b974b3",
  measurementId: "G-6MDJ7MW8QX"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const db = getFirestore(app);
export const analytics = getAnalytics(app);