import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIcIn725zhlgyZCZDPUZNuGJd54gvjpKo",
    authDomain: "simple-authentication-7fd97.firebaseapp.com",
    projectId: "simple-authentication-7fd97",
    storageBucket: "simple-authentication-7fd97.appspot.com",
    messagingSenderId: "725091484044",
    appId: "1:725091484044:web:ca64695728930c019bd6a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);