// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWJoffUtrTlTFy7VtvKqca1dotYBLRAK0",
  authDomain: "thof-shop.firebaseapp.com",
  projectId: "thof-shop",
  storageBucket: "thof-shop.appspot.com",
  messagingSenderId: "335198456948",
  appId: "1:335198456948:web:58038431215140e857d521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;