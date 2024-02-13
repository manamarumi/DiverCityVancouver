// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMTgDoVYXyNEyHXsqSo9XhyI3fH1CV3p0",
  authDomain: "divercity-vacouver.firebaseapp.com",
  databaseURL: "https://divercity-vacouver-default-rtdb.firebaseio.com/",
  projectId: "divercity-vacouver",
  storageBucket: "divercity-vacouver.appspot.com",
  messagingSenderId: "583776857911",
  appId: "1:583776857911:web:365d81935ec8d924e274b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();



export { app, auth };
