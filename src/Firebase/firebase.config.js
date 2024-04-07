// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUw2rphXHsLwnogOfxghrB4WzRvkqXrRg",
  authDomain: "real-estate-react-projec-2f7cf.firebaseapp.com",
  projectId: "real-estate-react-projec-2f7cf",
  storageBucket: "real-estate-react-projec-2f7cf.appspot.com",
  messagingSenderId: "276416273998",
  appId: "1:276416273998:web:1b43b6a4d006e96d2bed1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;