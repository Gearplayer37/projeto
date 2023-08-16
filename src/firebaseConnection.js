// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1s3VMlVlnjhWl4KqPDIc3aT8uM5KjsfY",
  authDomain: "banco-dados-react-c923a.firebaseapp.com",
  projectId: "banco-dados-react-c923a",
  storageBucket: "banco-dados-react-c923a.appspot.com",
  messagingSenderId: "48699081380",
  appId: "1:48699081380:web:ad9e2674421225bf779c31",
  measurementId: "G-9E8VMECJMF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };