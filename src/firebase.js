import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYwsZHv7PBGJKNjRnBNeP0uc2lcY6SUMo",
  authDomain: "clone-3eeb3.firebaseapp.com",
  projectId: "clone-3eeb3",
  storageBucket: "clone-3eeb3.appspot.com",
  messagingSenderId: "913180479576",
  appId: "1:913180479576:web:d164ecd9e5514b5fb93a2d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
