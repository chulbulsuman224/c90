import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBAkBvehslAO_BGfnX3MBSpvhilg3T4Mm8",
    authDomain: "social-media-app-b5a7b.firebaseapp.com",
    projectId: "social-media-app-b5a7b",
    storageBucket: "social-media-app-b5a7b.appspot.com",
    messagingSenderId: "1031575139818",
    appId: "1:1031575139818:web:72a6d449714238b23c6e93",
    measurementId: "G-6ECNV4BKD5"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }  

  export default firebase.firestore()