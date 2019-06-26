import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBix_Bsa93ll02BzmwKAyQ_Fw0pUTJ41-4",
    authDomain: "linkup-0826.firebaseapp.com",
    databaseURL: "https://linkup-0826.firebaseio.com",
    projectId: "linkup-0826",
    storageBucket: "",
    messagingSenderId: "561587795436",
    appId: "1:561587795436:web:13075dd0bb587d7d"
};


firebase.initializeApp(firebaseConfig);

export default firebase;


