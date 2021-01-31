'use strict';

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
}

function initFirebase(){
  console.log("running initFriebase!");
  const firebaseConfig = {
    apiKey: "AIzaSyBXkq1qTLdKBX4fwz7s81hOO3ybfSedm-g",
    authDomain: "fempowered.firebaseapp.com",
    databaseURL: "https://fempowered-default-rtdb.firebaseio.com",
    projectId: "fempowered",
    storageBucket: "fempowered.appspot.com",
    messagingSenderId: "787640154789",
    appId: "1:787640154789:web:720db52d7565ed59c16b4c"
  };
}

function initFirebaseAuth() {
  firebase.auth().onAuthStateChanged(authStateObserver);
}


