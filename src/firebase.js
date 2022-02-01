import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCy4C17ZcJ7Tcny_B0u9kLDC4rqJXzmqRQ",
    authDomain: "conocimiento-a6a8f.firebaseapp.com",
    projectId: "conocimiento-a6a8f",
    storageBucket: "conocimiento-a6a8f.appspot.com",
    messagingSenderId: "343944834481",
    appId: "1:343944834481:web:f12f22527e1f00c8372190"
  };

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();