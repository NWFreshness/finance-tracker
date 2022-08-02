import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDeqr_Ivl0f1aB6kZhcJcCHN9XRvuuzJAM",
    authDomain: "finance-tracker-2eb80.firebaseapp.com",
    projectId: "finance-tracker-2eb80",
    storageBucket: "finance-tracker-2eb80.appspot.com",
    messagingSenderId: "1060313966924",
    appId: "1:1060313966924:web:e378e127a6ca7f019947e9"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  //init services
  const projectFirestore = firebase.firestore;
  const projectAuth = firebase.auth();

  export { projectFirestore, projectAuth }