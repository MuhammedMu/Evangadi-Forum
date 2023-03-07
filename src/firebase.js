// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGINaS9M1bepg5XTgcvscXLUz4d0wNp1w",
  authDomain: "evangadi-forum-98435.firebaseapp.com",
  projectId: "evangadi-forum-98435",
  storageBucket: "evangadi-forum-98435.appspot.com",
  messagingSenderId: "781454275652",
  appId: "1:781454275652:web:91769aca821c760ea47811",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();