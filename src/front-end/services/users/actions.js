import * as constants from './constants'

// Users

export const fetchUsers = () => ({
  type: constants.FETCH_USERS
});

export const fetchUsersPending = () => ({
  type: constants.FETCH_USERS_PENDING,
});

export const fetchUsersSuccess = (data) => ({
  type: constants.FETCH_USERS_SUCCESS,
  data: data
});

export const fetchUsersFailure = (error) => ({
  type: constants.FETCH_USERS_FAILURE,
  error: error
});

// User

export const fetchUser = (uid) => ({
  type: constants.FETCH_USER,
  payload: {
    uid: uid
  }
});

export const fetchUserPending = () => ({
  type: constants.FETCH_USER_PENDING,
});

export const fetchUserSuccess = (data) => ({
  type: constants.FETCH_USER_SUCCESS,
  data: data
});

export const fetchUserFailure = (error) => ({
  type: constants.FETCH_USER_FAILURE,
  error: error
});

// Post User

export const postUser = (uid) => ({
  type: constants.POST_USER,
  payload: {
    uid: uid
  }
});

export const postUserPending = () => ({
  type: constants.POST_USER_PENDING,
});

export const postUserSuccess = (data) => ({
  type: constants.POST_USER_SUCCESS,
  data: data
});

export const postUserFailure = (error) => ({
  type: constants.POST_USER_FAILURE,
  error: error
});

// Export

export default {
  fetchUsers: fetchUsers,
  fetchUsersPending: fetchUsersPending,
  fetchUsersSuccess: fetchUsersSuccess,
  fetchUsersFailure: fetchUsersFailure,
  fetchUser: fetchUser,
  fetchUserPending: fetchUserPending,
  fetchUserSuccess: fetchUserSuccess,
  fetchUserFailure: fetchUserFailure,

  postUser: postUser,
  postUserPending: postUserPending,
  postUserSuccess: postUserSuccess,
  postUserFailure: postUserFailure,
}