import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAp8dCwFKsaA9S5Q0zIRU6RjR9I2V_R03o",
    authDomain: "reactjs-c2191.firebaseapp.com",
    projectId: "reactjs-c2191",
    storageBucket: "reactjs-c2191.appspot.com",
    messagingSenderId: "691246144708",
    appId: "1:691246144708:web:6f3b16ca8a03b191d33d91",
    measurementId: "G-GD2HPH4JC9"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
 

const auth = firebase.auth();
const db = firebaseApp.firestore();
// export { auth, db };
export {auth,db};
