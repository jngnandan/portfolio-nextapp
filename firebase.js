// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTuh63tSvoqIB6_VYZGjDmHKjYARzOaM8",
  authDomain: "portfolio-gn.firebaseapp.com",
  projectId: "portfolio-gn",
  storageBucket: "portfolio-gn.appspot.com",
  messagingSenderId: "1062624464115",
  appId: "1:1062624464115:web:82daeb29023ae5c276bb86",
  measurementId: "G-SNTMXRT194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db};