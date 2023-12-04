// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1UsrQDlWWdBW96T_r2V_nrNFeV5kN_C0",
  authDomain: "foro2dps.firebaseapp.com",
  projectId: "foro2dps",
  storageBucket: "foro2dps.appspot.com",
  messagingSenderId: "563726693376",
  appId: "1:563726693376:web:0e94f579ec6e3b3c4054e5",
  measurementId: "G-8EKPKYPFMX"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default appFirebase;

