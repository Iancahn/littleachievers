// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKgdAROhg4auy-OoD_jOyHcx-08_OUd_c",
    authDomain: "littleachievers-5ff45.firebaseapp.com",
    projectId: "littleachievers-5ff45",
    storageBucket: "littleachievers-5ff45.appspot.com",
    messagingSenderId: "962108303217",
    appId: "1:962108303217:web:cd7b76cb50289aded0b8d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);