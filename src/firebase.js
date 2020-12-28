import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBplINohVKeTZ9nEwwf6QCPvmwAtHGQM5w",
    authDomain: "facebook-messenger-cl-81bde.firebaseapp.com",
    projectId: "facebook-messenger-cl-81bde",
    storageBucket: "facebook-messenger-cl-81bde.appspot.com",
    messagingSenderId: "634709263189",
    appId: "1:634709263189:web:12bd83112d8c9086da65dc",
    measurementId: "G-JE8623FRKB"  
});

const db = firebaseApp.firestore();

export default db;
