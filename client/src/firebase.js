// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "auth-mern-62bd1.firebaseapp.com",
  projectId: "auth-mern-62bd1",
  storageBucket: "auth-mern-62bd1.appspot.com",
  messagingSenderId: "410295910128",
  appId: "1:410295910128:web:3e76755fdb4f7b8d940c35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app


