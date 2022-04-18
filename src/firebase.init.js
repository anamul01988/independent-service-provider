// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBklTUOpB7plMecJIB_liBT-VrmicaxaCI",
//   authDomain: "medical-informatics-app.firebaseapp.com",
//   projectId: "medical-informatics-app",
//   storageBucket: "medical-informatics-app.appspot.com",
//   messagingSenderId: "99949933851",
//   appId: "1:99949933851:web:968facb8f431f22333cfbe"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;