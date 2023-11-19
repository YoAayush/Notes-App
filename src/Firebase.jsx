// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore,collection} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxLHKl_D59FT-E1sttfJhMzSfT9LuPcaI",
  authDomain: "notes-app-c8628.firebaseapp.com",
  projectId: "notes-app-c8628",
  storageBucket: "notes-app-c8628.appspot.com",
  messagingSenderId: "721501665407",
  appId: "1:721501665407:web:2de3c046d8a3ff9718a74a",
  measurementId: "G-ZV3WJNFKRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// The getAnalytics() method in Firebase Analytics is used to get a reference to the Firebase Analytics object. This object can then be used to log events, set user properties, and track user engagement.
const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const notescollection = collection(db,"notes"); //get a collection refference (documents) that refers to the collection at specified path.