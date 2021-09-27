// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5Pbf0TcapW3pPA7dhuBQJg2PWG1uASqA",
    authDomain: "fir-f024b.firebaseapp.com",
    projectId: "fir-f024b",
    storageBucket: "fir-f024b.appspot.com",
    messagingSenderId: "883177407361",
    appId: "1:883177407361:web:873c7087b1f59b2b601e80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
// add info to database
// seedDatabase(firebase);
const auth = getAuth();
export { auth, db };