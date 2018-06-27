import { googleProvider, rebase } from './Fire'


export function auth (email, pw) {
  return rebase.initializedApp.auth().createUserWithEmailAndPassword(email, pw)
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
  // console.log("save user", user);
  return rebase.initializedApp.database().ref().child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid,
    })
    .then(() => {
      const userObj = JSON.stringify(user);
            sessionStorage.setItem('user', userObj);
      return user;
    })
}


export function saveRecipe (user, recipeObj) {
  console.log("save user and recipeObj", user, recipeObj);
  recipeObj.uid = user.uid;
  return rebase.initializedApp.database().ref().child(`users/${recipeObj.uid}/recipes`)
    .push(recipeObj)
    .then(() => {
      
      // return recipeObj;
    })
}

export function updateRecipe (user, recipeObj) {
  console.log("save user and recipeObj", user, recipeObj);
  return rebase.initializedApp.database().ref().child(`recipes`)
    .update(recipeObj)
    .then(() => {
      
      // return recipeObj;
    })
} 



// export function saveRecipe (user, recipeObj) {
//   console.log("save user and recipeObj", user, recipeObj);
//   recipeObj.uid = user.uid;
//   return rebase.initializedApp.database().ref(`recipes`)
//     .push(recipeObj)
//     .then(() => {
      
//       // return recipeObj;
//     })
// }

// export function updateRecipe (user, recipeObj) {
//   console.log("save user and recipeObj", user, recipeObj);
//   return rebase.initializedApp.database().ref(`recipes`)
//     .push(recipeObj)
//     .then(() => {
      
//       // return recipeObj;
//     })
// } 