import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyCmuBYVCMJwnzLCYwB9amMLLHz6RpR5Jvc",
    authDomain: "to-do-task-5a51b.firebaseapp.com",
    projectId: "to-do-task-5a51b",
    storageBucket: "to-do-task-5a51b.appspot.com",
    messagingSenderId: "17567269053",
    appId: "1:17567269053:web:4e3e291886a7d2cf3e77d4"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestoreDocumentID = firebase.firestore.FieldPath.documentId();

