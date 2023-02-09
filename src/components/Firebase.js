// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLecwWuJYZmxtiUCYuo1nhgbC2h5fM7jI",
  authDomain: "todo-project-9ca0b.firebaseapp.com",
  projectId: "todo-project-9ca0b",
  storageBucket: "todo-project-9ca0b.appspot.com",
  messagingSenderId: "360129595519",
  appId: "1:360129595519:web:7c557a1815b5fcdc07974a",
  measurementId: "G-QR10W9X3EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


