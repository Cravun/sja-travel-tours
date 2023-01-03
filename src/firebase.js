import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXAYXI8UX3ABUKqYHTFYFelyueYg_5FT0",
  authDomain: "sja-travel-and-tours.firebaseapp.com",
  projectId: "sja-travel-and-tours",
  storageBucket: "sja-travel-and-tours.appspot.com",
  messagingSenderId: "527094085487",
  appId: "1:527094085487:web:286b24b405033042585a9a",
  measurementId: "G-P5S0VZ41P0",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
