import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmqVSKNxNj3lWLyM0UKLmsgFmmEfp0kN0",
  authDomain: "padaria-auth.firebaseapp.com",
  projectId: "padaria-auth",
  storageBucket: "padaria-auth.appspot.com",
  messagingSenderId: "655439043127",
  appId: "1:655439043127:web:a63abd1d5351117135fdb2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;