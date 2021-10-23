import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCejo4DR_pCgPZwvCY6HdXwsY4qYbgHE5k",
    authDomain: "yelcart-firebase.firebaseapp.com",
    projectId: "yelcart-firebase",
    storageBucket: "yelcart-firebase.appspot.com",
    messagingSenderId: "31763703346",
    appId: "1:31763703346:web:cda9b73f63979b03287e2b",
    measurementId: "G-K75NWN1WHP"
};

function InitFirebase(){
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
}

InitFirebase();

export {firebase}
