// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBklTUOpB7plMecJIB_liBT-VrmicaxaCI",
  authDomain: "medical-informatics-app.firebaseapp.com",
  projectId: "medical-informatics-app",
  storageBucket: "medical-informatics-app.appspot.com",
  messagingSenderId: "99949933851",
  appId: "1:99949933851:web:968facb8f431f22333cfbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;