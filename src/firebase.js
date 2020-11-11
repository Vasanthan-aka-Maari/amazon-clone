import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPPch9vFj4b30KM_dX2BqcjgyoHbI1K6c",
  authDomain: "clone-782c9.firebaseapp.com",
  databaseURL: "https://clone-782c9.firebaseio.com",
  projectId: "clone-782c9",
  storageBucket: "clone-782c9.appspot.com",
  messagingSenderId: "1010632370583",
  appId: "1:1010632370583:web:345f33b73d33450a633cd2",
  measurementId: "G-00F30HZ9B5",
});

const auth = firebase.auth();

export { auth };
