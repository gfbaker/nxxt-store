import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKrblvittEd6rI0sMXLbtWDLJcM02-eWs",
  authDomain: "nxxt-store.firebaseapp.com",
  projectId: "nxxt-store",
  storageBucket: "nxxt-store.appspot.com",
  messagingSenderId: "297601955175",
  appId: "1:297601955175:web:868438af65cb3285a0ebc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;