import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBrw2sFRzgKTjWZ_hW9AeBFycWoFHuRigg",
    authDomain: "entregareactjs-a1f3b.firebaseapp.com",
    projectId: "entregareactjs-a1f3b",
    storageBucket: "entregareactjs-a1f3b.firebasestorage.app",
    messagingSenderId: "268037696899",
    appId: "1:268037696899:web:c12c66dd9d47fb24c81ab6",
    measurementId: "G-W26BWCWK99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


