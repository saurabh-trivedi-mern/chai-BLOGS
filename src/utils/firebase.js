// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogging-d3395.firebaseapp.com",
  projectId: "blogging-d3395",
  storageBucket: "blogging-d3395.appspot.com",
  messagingSenderId: "1099106138703",
  appId: "1:1099106138703:web:0174cd83ace80aae80883a",
  measurementId: "G-B5QJTW22LZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);