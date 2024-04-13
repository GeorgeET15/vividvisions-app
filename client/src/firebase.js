// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2EoX5ZKnUAgvsjxBiflawtERb3uIdvyc",
  authDomain: "vivid-2a48d.firebaseapp.com",
  projectId: "vivid-2a48d",
  storageBucket: "vivid-2a48d.appspot.com",
  messagingSenderId: "176388417735",
  appId: "1:176388417735:web:4b2a7f6d1dfce0fd1df6e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
