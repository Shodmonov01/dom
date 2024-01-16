import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmIlRbJbX377r3EvKbQihaDLOrJ0twUkM",
  authDomain: "registartion-8a737.firebaseapp.com",
  projectId: "registartion-8a737",
  storageBucket: "registartion-8a737.appspot.com",
  messagingSenderId: "280219354852",
  appId: "1:280219354852:web:d38710e0c8e2d5e632cef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


// import firebase from 'firebase'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyBtl5KJtwaX5kjfKU4sZfUYpWjNO_UTkZA",
//   authDomain: "magaz-6f1e6.firebaseapp.com",
//   projectId: "magaz-6f1e6",
//   storageBucket: "magaz-6f1e6.appspot.com",
//   messagingSenderId: "342021689871",
//   appId: "1:342021689871:web:362daa5bb115fba641497a"
// };
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();

// export {auth,db,storage}