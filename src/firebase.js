// Import the functions you need from the SDKs you need

import   firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import "firebase/compat/auth";
import "firebase/compat/firestore";




  const firebaseConfig = {
    apiKey: "AIzaSyAGush2LlVu-fuQhNoGpn4TW0PM8vEY4xI",
    authDomain: "deft-stratum-369017.firebaseapp.com",
    projectId: "deft-stratum-369017",
    storageBucket: "deft-stratum-369017.appspot.com",
    messagingSenderId: "490720169503",
    appId: "1:490720169503:web:64934b8aa02c962ded8f2a",
    measurementId: "G-MSRVKXSPE9",
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);

  // const db = getDatabase(app);

  firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;




