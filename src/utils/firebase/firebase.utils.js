import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE-FUVaOXoE4n-GxY0V8GVIHMASIgk-5Q",
  authDomain: "crwn-clothing-db-e19db.firebaseapp.com",
  projectId: "crwn-clothing-db-e19db",
  storageBucket: "crwn-clothing-db-e19db.appspot.com",
  messagingSenderId: "403815174560",
  appId: "1:403815174560:web:fbb873e3a8af620e2814c5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
