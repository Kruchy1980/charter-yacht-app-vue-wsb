import firebase from 'firebase/app';
require('firebase/app');
require('firebase/auth')
require('firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBeD3MnaDS2oJ_bKq8XyhS1hH90XqbRL98",
    authDomain: "yachtscharters-ddb15.firebaseapp.com",
    databaseURL: "https://yachtscharters-ddb15.firebaseio.com",
    projectId: "yachtscharters-ddb15",
    storageBucket: "yachtscharters-ddb15.appspot.com",
    messagingSenderId: "883726769363",
    appId: "1:883726769363:web:aa46e213002c8c4cf6c826"
  };

try{
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log('init firebase');
}
catch(err){
    console.error("Error initialize Firebase: ", err);
}
export default firebase;