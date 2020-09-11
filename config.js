import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDMrGTR1gBejR2hBacwaRKExnXrmfvP_y4",
    authDomain: "my-app-eb7a0.firebaseapp.com",
    databaseURL: "https://my-app-eb7a0.firebaseio.com",
    projectId: "my-app-eb7a0",
    storageBucket: "my-app-eb7a0.appspot.com",
    messagingSenderId: "793706446292",
    appId: "1:793706446292:web:d5cc7f6bf885fb629c2a41"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore()