import * as firebase from 'firebase'

import userApi from '../users/api'

const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()

function throwError(error) {
    throw new Error(
        {
            status: error.response.status,
            error: error.response.data
        }
    )
}

function checkAuth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        userApi.getUser(user.uid).then(data => {
          resolve(
            {
              user: data,
              message: 'user is logged'
            }
          )
        })
      } else {
        resolve(
          {
            user: false,
            message: 'user is not logged'
          }
        )
      }
    })
  })
}

function signIn(data) {
  let provider
  switch(data.data.mode) {
      case 'facebook':
          provider = facebookProvider
          break
      case 'google':
          provider = googleProvider
          break
      default:
  }

  return new Promise((resolve, reject) => {
    firebase.auth().signInWithPopup(provider).then((result) => {
      // let token = result.credential.accessToken
      let user = result.user
      console.log('user', user)
      // TODO - register user into BDD

      resolve(
        {
          user: user,
          login: true,
          message: 'user is sign in',
          from: data.data.from
        }
      )
    }).catch((error) => {
      // let errorCode = error.code,
      //     errorMessage = error.message,
      //     email = error.email,
      //     credential = error.credential
      resolve(
        {
          user: false,
          login: false,
          message: 'user is not login',
          error: error
        }
      )
    })
  })
}

function logout() {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      resolve(
        {
          logout: true,
          message: 'user is logout'
        }
      )
    }).catch((error) => {
      // An error happened.
      resolve(
        {
          logout: false,
          message: 'user is not logout'
        }
      )
    })
  })
}

export default {
  checkAuth: checkAuth,
  signIn: signIn,
  logout: logout
}
