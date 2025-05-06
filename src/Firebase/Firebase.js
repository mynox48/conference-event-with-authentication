// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEqrFNO9hLgAOztLOje3xiI6o-eGhm_pE",
  authDomain: "a9-conference-event.firebaseapp.com",
  projectId: "a9-conference-event",
  storageBucket: "a9-conference-event.firebasestorage.app",
  messagingSenderId: "552114788640",
  appId: "1:552114788640:web:e8e7107ef3e3d2f862df45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth (app);

export default app;