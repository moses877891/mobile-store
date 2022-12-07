import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    collection,
    writeBatch
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDAWH3gB3EWc4AewbR1S_885Eag8ZOGgYQ",
    authDomain: "phone-store-876bb.firebaseapp.com",
    projectId: "phone-store-876bb",
    storageBucket: "phone-store-876bb.appspot.com",
    messagingSenderId: "5337254361",
    appId: "1:5337254361:web:84e59016ca2318bf6cf1c8"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach(async (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
}