import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDYxtegUeFJGhnHDWjPic56xzu24107-M",
  authDomain: "farmknowledge-7f477.firebaseapp.com",
  projectId: "farmknowledge-7f477",
  storageBucket: "farmknowledge-7f477.appspot.com",
  messagingSenderId: "861632834719",
  appId: "1:861632834719:web:1ffad21066bf27e80046aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

