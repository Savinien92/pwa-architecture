import { call, put, takeEvery, all } from 'redux-saga/effects';

import api from './api';
import actions from './actions';
import * as constants from './constants'

function* fetchUsers(action){
  try {
    yield put(actions.fetchUsersPending());
    const users = yield call(api.getUsers);
    // console.log('sagas.users', users)
    yield put(actions.fetchUsersSuccess(users));
  } catch(error) {
    yield put(actions.fetchUsersFailure(error));
  }
}

export function* fetchUser(uid){
  try {
    yield put(actions.fetchUserPending());
    const user = yield call(api.getUser, uid);
    yield put(actions.fetchUserSuccess(user));
  } catch(error) {
    yield put(actions.fetchUserFailure(error));
  }
}

export function* postUser(user){
  try {
    yield put(actions.postUserPending());
    const postNewUser = yield call(api.postUser, user);
    yield put(actions.postUserSuccess(postNewUser));
  } catch(error) {
    yield put(actions.postUserFailure(error));
  }
}

function* sagasUsers(){
  yield all([
    takeEvery(constants.FETCH_USERS, fetchUsers),
    takeEvery(constants.FETCH_USER, fetchUser),
    takeEvery(constants.POST_USER, postUser),
  ])
}

export default sagasUsers