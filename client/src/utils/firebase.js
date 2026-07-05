
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "newproject-d591e.firebaseapp.com",
  projectId: "newproject-d591e",
  storageBucket: "newproject-d591e.firebasestorage.app",
  messagingSenderId: "311891791621",
  appId: "1:311891791621:web:f4a9d71788f88cf49e316c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}