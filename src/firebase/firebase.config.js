// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuXNifTg355SeH2JvDSuefNtVS9JgV2oo",
  authDomain: "learn-plus-482937.firebaseapp.com",
  projectId: "learn-plus-482937",
  storageBucket: "learn-plus-482937.firebasestorage.app",
  messagingSenderId: "244854511169",
  appId: "1:244854511169:web:c81f29c119e0bf8fd9d8c0",
  measurementId: "G-RQ0G68YKRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };