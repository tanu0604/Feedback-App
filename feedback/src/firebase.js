// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB5rhjwtPAq2VRsXNUeOAZ0iny_n2Yp7D0",
  authDomain: "feedback-app-4cdc5.firebaseapp.com",
  projectId: "feedback-app-4cdc5",
  storageBucket: "feedback-app-4cdc5.firebasestorage.app",
  messagingSenderId: "564094793332",
  appId: "1:564094793332:web:6334951ae0c9e4012e8321",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, getDocs };
