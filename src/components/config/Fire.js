
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDuFa9pcvLdZzAHa3fjzskd1_BqbFTp2R4",
    authDomain: "delish-d7b99.firebaseapp.com",
    databaseURL: "https://delish-d7b99.firebaseio.com",
    projectId: "delish-d7b99",
    storageBucket: "delish-d7b99.appspot.com"
  }

  const fire = firebase.initializeApp(config);
//   const rebase = Rebase.createClass(fire.database());
//   const User = firebase.auth().currentUser;
//   const GoogleProvider = new firebase.auth.GoogleAuthProvider();

  export default fire; /* rebase,  user; googleProvider ;*/