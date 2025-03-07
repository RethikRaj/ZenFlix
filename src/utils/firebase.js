// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPlupXLucoIgFmG31LL9hom1O1soXtHDI",
  authDomain: "zenflix-fc99d.firebaseapp.com",
  projectId: "zenflix-fc99d",
  storageBucket: "zenflix-fc99d.firebasestorage.app",
  messagingSenderId: "905443246169",
  appId: "1:905443246169:web:262d9e8b55cbb765abf148",
  measurementId: "G-580K6Q9G47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();