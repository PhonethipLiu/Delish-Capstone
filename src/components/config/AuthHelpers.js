import { googleProvider, rebase } from './Fire'


export function auth (email, pw, name) {
  return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw, name)
    .then((data) => {
      console.log("data is", data);
      saveUser(data);
    })
}

export function logout () {
  return rebase.initializedApp.auth().signOut()
}

export function login (email, pw) {
  return rebase.initializedApp.auth().signInWithEmailAndPassword(email, pw)
}

export function loginWithGoogle () {
  return rebase.initializedApp.auth().signInWithPopup(googleProvider)
  .then((data) => {
    saveUser(data.user);
  });
}

export function resetPassword (email) {
  return rebase.initializedApp.auth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
      name: user.name,
      img: user.img,
    })
    .then(() => {
      
      return user;
    })
}

