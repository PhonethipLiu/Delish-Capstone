import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDuFa9pcvLdZzAHa3fjzskd1_BqbFTp2R4",
    authDomain: "delish-d7b99.firebaseapp.com",
    databaseURL: "https://delish-d7b99.firebaseio.com",
    projectId: "delish-d7b99",
    storageBucket: "delish-d7b99.appspot.com"
  }

  const app = firebase.initializeApp(config);
  const base = Rebase.createClass(app.database())

  export default base;

  export const googleProvider = new firebase.auth.GoogleAuthProvider();