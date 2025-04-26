// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6ni9THCcYe8X9AfoMYSX53CXrsiDoAeM",
  authDomain: "portfolio-e82f1.firebaseapp.com",
  projectId: "portfolio-e82f1",
  storageBucket: "portfolio-e82f1.appspot.com",
  messagingSenderId: "381502552191",
  appId: "1:381502552191:web:9b8bd9fed9d8dd2122674a",
  measurementId: "G-GM47XWJEJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
