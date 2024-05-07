// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "chaiblogs-fb510.firebaseapp.com",
  projectId: "chaiblogs-fb510",
  storageBucket: "chaiblogs-fb510.appspot.com",
  messagingSenderId: "372392810210",
  appId: "1:372392810210:web:cef1546fb6773057bef0bb",
  measurementId: "G-TT43R1PM7P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);