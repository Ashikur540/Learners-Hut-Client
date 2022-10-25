// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyRGT7rstX9ZcUejZw7mRuatILdAxW_tc",
    authDomain: "learners-hut.firebaseapp.com",
    projectId: "learners-hut",
    storageBucket: "learners-hut.appspot.com",
    messagingSenderId: "661386820500",
    appId: "1:661386820500:web:a7434bce9cedaafd0e6d81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);