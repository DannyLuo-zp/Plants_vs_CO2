import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAoH2NcIJ1v1eItjCKEykIo3pVC7VutbpQ",
    authDomain: "divhack-df997.firebaseapp.com",
    databaseURL: "https://divhack-df997.firebaseio.com",
    projectId: "divhack-df997",
    storageBucket: "divhack-df997.appspot.com",
    messagingSenderId: "507687362645",
    appId: "1:507687362645:web:8e47e036f2ce8380b2f4dc",
    measurementId: "G-L7D6K4DX54"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const Auth = firebase.auth();

// How long does login status last
Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);