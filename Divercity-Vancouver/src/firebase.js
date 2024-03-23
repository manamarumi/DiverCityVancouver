// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail  } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // 비밀번호 재설정 이메일이 성공적으로 보내졌을 때 실행되는 코드
      console.log("Password reset email sent!");
    })
    .catch((error) => {
      // 오류 발생 시 실행되는 코드
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error sending password reset email:", errorMessage);
    });
};


export { app, auth, db, resetPassword };
