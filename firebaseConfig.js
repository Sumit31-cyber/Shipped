import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDllRgu8Zv6K3DRoJC_Xn4lhBKTUv3ea6U",
  authDomain: "shipped-19a9a.firebaseapp.com",
  projectId: "shipped-19a9a",
  storageBucket: "shipped-19a9a.appspot.com",
  messagingSenderId: "386991203699",
  appId: "1:386991203699:web:8cf1ed486bec03732c5106"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const authentication = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { app, authentication, db, storage }