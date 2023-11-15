// Module to initiate the firebaseApp using my project config,
// and to import any firebase components i need ready for global declarement in main.js

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// create firebase config - copied directly from firebase project
const firebaseConfig = {
    apiKey: "AIzaSyA8zWUKjmu7mL_cW8t9sM5S6ZJhMDdik3s",
    authDomain: "till-manager.firebaseapp.com",
    databaseURL: "https://till-manager-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "till-manager",
    storageBucket: "till-manager.appspot.com",
    messagingSenderId: "1050796441026",
    appId: "1:1050796441026:web:ed46cbd835e89ccc0e6a5b",
    measurementId: "G-PZVRX7QVYM",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const firebaseAuth = getAuth(firebaseApp);

// get a list of all users currently signed up on this firstore app - TODO: doesnt work
let users = firebaseAuth.getUsers?.();
console.log("users: ", users);

export { firebaseApp, firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
