// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANCpcETw8Jv2MJyZ_HFLE6ETrK0pBWo_8",
  authDomain: "divercity-vancouver.firebaseapp.com",
  projectId: "divercity-vancouver",
  storageBucket: "divercity-vancouver.appspot.com",
  messagingSenderId: "441916958069",
  appId: "1:441916958069:web:1fba6c0a62b4f1bfcf1f3c",
  measurementId: "G-3MSFE4LB6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
