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
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()
    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      
      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      } catch(error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;