// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtUIC2RFkb6i815I0au9ZLev078txD9ks",
  authDomain: "login-723af.firebaseapp.com",
  projectId: "login-723af",
  storageBucket: "login-723af.appspot.com",
  messagingSenderId: "801192195817",
  appId: "1:801192195817:web:b930fa9f89b79b1026a278",
  measurementId: "G-KJQYZ9HFCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
