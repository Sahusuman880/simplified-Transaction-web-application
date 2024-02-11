import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwXijg3gJLmGMjzyDtMU1qJwCabQgBWno",
  authDomain: "transaction-app-b9aef.firebaseapp.com",
  projectId: "transaction-app-b9aef",
  storageBucket: "transaction-app-b9aef.appspot.com",
  messagingSenderId: "472976274166",
  appId: "1:472976274166:web:1619d1eb5733519f8632d7",
  measurementId: "G-9D8DN63G43",
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;