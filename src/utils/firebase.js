// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { browserLocalPersistence, getAuth, onAuthStateChanged, setPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzwv5ZhU_0-HMhDV6zgCLwJhFzGklrn5Y",
  authDomain: "netflixgbt-d8058.firebaseapp.com",
  projectId: "netflixgbt-d8058",
  storageBucket: "netflixgbt-d8058.appspot.com",
  messagingSenderId: "662885736038",
  appId: "1:662885736038:web:179fcfc1028a28117b97a7",
  measurementId: "G-PV4ZV931H2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const appAuth = getAuth();
// setPersistence(appAuth, browserLocalPersistence);
onAuthStateChanged(appAuth, (user) => {});
export const firebaseAuth = appAuth;