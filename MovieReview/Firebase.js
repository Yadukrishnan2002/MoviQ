import { initializeApp } from "firebase/app";
import firebase from 'firebase'
import firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB61eDhsH-SoQvCD2YvWXERfL4HY1uNw5I",
  authDomain: "moviq-app.firebaseapp.com",
  projectId: "moviq-app",
  storageBucket: "moviq-app.appspot.com",
  messagingSenderId: "506035451420",
  appId: "1:506035451420:web:26519251da198aeab551d9"
  };

let app;
if(firebase.apps.length === 0)
 {
     app = firebase.initializeApp(firebaseConfig);
 }
 else{
     app = firebase.app()
 }

const auth = firebase.auth()
const db = firebase.firestore()

export {firebase, db, auth}