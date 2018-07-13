import * as constants from './constants'

// Check User

export const checkUser = (data) => ({
  type: constants.CHECK_USER,
  payload: {
    data: data
  }
})

export const checkUserPending = () => ({
  type: constants.CHECK_USER_PENDING,
})

export const checkUserSuccess = (data) => ({
  type: constants.CHECK_USER_SUCCESS,
  data: data
})

export const checkUserFailure = (error) => ({
  type: constants.CHECK_USER_FAILURE,
  error: error
})

// Check Auth

export const checkAuth = () => ({
  type: constants.CHECK_AUTH
})

export const checkAuthPending = () => ({
  type: constants.CHECK_AUTH_PENDING,
})

export const checkAuthSuccess = (data) => ({
  type: constants.CHECK_AUTH_SUCCESS,
  data: data
})

export const checkAuthFailure = (error) => ({
  type: constants.CHECK_AUTH_FAILURE,
  error: error
})

// Sign in

export const signIn = (data) => ({
  type: constants.FETCH_SIGNIN,
  data: data
})

export const signInPending = () => ({
  type: constants.FETCH_SIGNIN_PENDING,
})

export const signInSuccess = (data) => ({
  type: constants.FETCH_SIGNIN_SUCCESS,
  data: data
})

export const signInFailure = (error) => ({
  type: constants.FETCH_SIGNIN_FAILURE,
  error: error
})

// Logout

export const logout = () => ({
  type: constants.FETCH_LOGOUT
})

export const logoutPending = () => ({
  type: constants.FETCH_LOGOUT_PENDING,
})

export const logoutSuccess = (data) => ({
  type: constants.FETCH_LOGOUT_SUCCESS,
  data: data
})

export const logoutFailure = (error) => ({
  type: constants.FETCH_LOGOUT_FAILURE,
  error: error
})

// Export

export default {
  checkUser: checkUser,
  checkUserPending: checkUserPending,
  checkUserSuccess: checkUserSuccess,
  checkUserFailure: checkUserFailure,
  checkAuth: checkAuth,
  checkAuthPending: checkAuthPending,
  checkAuthSuccess: checkAuthSuccess,
  checkAuthFailure: checkAuthFailure,
  signIn: signIn,
  signInPending: signInPending,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  logout: logout,
  logoutPending: logoutPending,
  logoutSuccess: logoutSuccess,
  logoutFailure: logoutFailure
}