import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjavC2NlVWhkoFc8eVVDZjiKo68_Ls-XI",
    authDomain: "headstarter-inventory-app.firebaseapp.com",
    projectId: "headstarter-inventory-app",
    storageBucket: "headstarter-inventory-app.appspot.com",
    messagingSenderId: "174175255957",
    appId: "1:174175255957:web:095fc5de29af803a45ca9c",
    measurementId: "G-C7SPC03ZXD"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };