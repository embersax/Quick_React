
import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCnY17zOhYbZbOHozRUPfnV4eBozRnGioA",
    authDomain: "react-394.firebaseapp.com",
    databaseURL: "https://react-394.firebaseio.com",
    projectId: "react-394",
    storageBucket: "react-394.appspot.com",
    messagingSenderId: "126845381084",
    appId: "1:126845381084:web:4702672639f8193b408719"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database().ref();
