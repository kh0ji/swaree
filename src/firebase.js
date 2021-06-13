import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"
import "firebase/firestore"
import "firebase/storage"


 var firebaseConfig = {
    apiKey: "AIzaSyDkKNtgehlfeNJGMy8OC3j8ai-MI8AcePY",
    authDomain: "swaree-59063.firebaseapp.com",
    projectId: "swaree-59063",
    storageBucket: "swaree-59063.appspot.com",
    messagingSenderId: "363868339383",
    appId: "1:363868339383:web:ddf541d6321d4d0d932132"
  };
 firebase.initializeApp(firebaseConfig)

var auth= firebase.auth()
var firestore= firebase.firestore()
var storage= firebase.storage()

export {auth ,firestore,storage}