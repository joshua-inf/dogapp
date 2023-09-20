// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getAuth} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl6ihYvCk_zWy1m1gQXjD4iUWZihHWz9U",
  authDomain: "dogappweb.firebaseapp.com",
  projectId: "dogappweb",
  storageBucket: "dogappweb.appspot.com",
  messagingSenderId: "921583358117",
  appId: "1:921583358117:web:3602993fbad9190dcebd4c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP,{
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(FIREBASE_APP)