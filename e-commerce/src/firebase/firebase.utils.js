import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCzdEd8ATr3KcwrGcmDj_6Ivi926FL22b8",
    authDomain: "e-commerce-48e42.firebaseapp.com",
    databaseURL: "https://e-commerce-48e42.firebaseio.com",
    projectId: "e-commerce-48e42",
    storageBucket: "e-commerce-48e42.appspot.com",
    messagingSenderId: "420016841343",
    appId: "1:420016841343:web:a4065fef77c473f1ce954a",
    measurementId: "G-R2J8FN54BH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;