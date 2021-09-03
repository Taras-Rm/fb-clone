import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLgYneT2gmF8cGccaT8Uj9lwpjbJJKD4w",
    authDomain: "facebook-clone-20347.firebaseapp.com",
    projectId: "facebook-clone-20347",
    storageBucket: "facebook-clone-20347.appspot.com",
    messagingSenderId: "155226436491",
    appId: "1:155226436491:web:45150e46a866c5aad0358e",
    measurementId: "G-HT8MCMS23R"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
