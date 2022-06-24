import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEb723VRyU6LKwsh7wdGsCN5iQ0NYaqJo",
  authDomain: "msconsulting-auth.firebaseapp.com",
  projectId: "msconsulting-auth",
  storageBucket: "msconsulting-auth.appspot.com",
  messagingSenderId: "550972516187",
  appId: "1:550972516187:web:d3fd7792241db3bd559c7e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const db = getFirestore(app);
// export const db = getDatabase(app);
