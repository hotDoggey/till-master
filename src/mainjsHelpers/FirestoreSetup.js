// Module to initiate the firebaseApp using my project config,
// and to import any firebase components i need ready for global declarement in main.js

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    setDoc,
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCustomToken,
} from "firebase/auth";

// create firebase config - copied directly from firebase project
let firebaseConfig = {
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
let firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore Database - FYI - the db doesnt need a specific parameter passed such as the firebaseApp, it will pick that up itself as its a global variable
let firestoreDB = getFirestore();
/*  For future me: A ref points to a collection, we use the colletion method to create 
    a ref. We pass in the firestoreDB and the name of the collection and can store it to a var
    then we can use getDocs function with a ref to retrieve the data in that collection,
    this returns a promise with a snapshot. We can use the snapshot.docs to get each 
    entry, and then can use .data() on each entry to get all the values stored for that 
    entry, and can get the id using entry.id. In the below example "entry" is the "tab". 

    The following code has moved to the store, but i have left it here commented out for future reference.

    // Collection reference
    let colRef = collection(firestoreDB, "tabs");
    // initialise tabs var
    let tabs = [];
    // Get collection data
    getDocs(colRef)
    .then((snapshot) => {
        snapshot.docs.forEach((tab) => {
            let id = tab.id;
            tabs.push({ ...tab.data(), id });
        });
    })
    .catch((error) => {
        console.error("Error getting tabs: ", error);
    });
    console.log("tabs: ", tabs);
    */
// Collection reference to the all tabs in firestore
let tabsColRef = collection(firestoreDB, "tabs");

// Initialize Firebase Authentication
let firebaseAuth = getAuth(firebaseApp);

// get a list of all users currently signed up on this firstore app - TODO: doesnt work
// let users = firebaseAuth.getUsers?.();
// console.log("users: ", users);

export {
    firebaseApp,
    firestoreDB,
    collection,
    tabsColRef,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    updateDoc, // update a part of the document give you have the docRef created
    setDoc, // replace the whole doucment with a new object
    firebaseAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithCustomToken,
};
