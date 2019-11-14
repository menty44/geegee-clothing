import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC18tPQ7-k4NdZpKL28gtN_6lYQfE6z4K8",
    authDomain: "geegee-db.firebaseapp.com",
    databaseURL: "https://geegee-db.firebaseio.com",
    projectId: "geegee-db",
    storageBucket: "geegee-db.appspot.com",
    messagingSenderId: "473465384223",
    appId: "1:473465384223:web:8ee4685679da758856142a",
    measurementId: "G-M31H7EPT21"
  };

  export const createUserProfileDocument = async (userAuth, data) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
