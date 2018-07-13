import * as firebase from 'firebase'

function getUsers() {
  return new Promise((resolve, reject) => {
    firebase.firestore().collection("users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
      })

      let users = querySnapshot.docs.map(function(documentSnapshot) {
        return documentSnapshot.data();
      })

      console.log('api.users', users)
      resolve(users)

    }).catch((err) => { 
      console.log("ERROR getTeamsList : " + err.message)
      reject(err)
    })
  })
}

function getUser(uid) {
  return new Promise((resolve, reject) => {
    firebase.firestore().collection("users").doc(uid).get().then(function(doc) {
      if (doc.exists) {
        // console.log("Document data:", doc.data());
        resolve(doc.data());
      } else {
        // console.log("No such document!");
        resolve(false);
      }

    }).catch((err) => { 
      // console.log("Error getting document:", err);
      reject(err)
    })
  })
}

function postUser(user) {
  console.log('postUser.user', user)
  return new Promise((resolve, reject) => {
    firebase.firestore().collection("users").doc(user.uid).set({
      ...user
    })
    .then(function() {
        console.log("Document successfully written!")
        resolve(true);
    })
    .catch(function(err) {
        console.error("Error writing document: ", err)
        reject(err)
    });
  })
}

export default {
  getUsers: getUsers,
  getUser: getUser,
  postUser: postUser
}