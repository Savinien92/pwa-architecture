import { call, put, takeEvery, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import authApi from './api'
import actions from './actions'
import * as constants from './constants'

import userApi from '../users/api'
import notifActions from '../../core/middlewares/notifications/actions'

function* checkAuth(){
  try {
    yield put(actions.checkAuthPending())
    const data = yield call(authApi.checkAuth)
    yield put(actions.checkAuthSuccess(data))
    if(data.user) {
      // if(!data.user.roles.player || !data.user.roles.captain) {
      //   yield put(push('chooseyourside'))
      // }
    }
  } catch(error) {
    yield put(actions.checkAuthFailure(error))
  }
}

function* signIn(mode){
  try {
    yield put(actions.signInPending())
    const data = yield call(authApi.signIn, mode)
    if(!data.user) {
      yield put(actions.signInFailure(data.error))
      yield put(notifActions.popNotificationWarning({message: data.error.message}))
    } else {
      yield put(actions.signInSuccess(data))
      // if user not exist in bdd
      const userExist = yield call(userApi.getUser, data.user.uid)
      if(!userExist) {
        // save new user in bdd
        const user = {
          uid: data.user.uid,
          email: data.user.email,
          displayName: data.user.displayName,
          photoUrl: data.user.photoURL,
          roles: {
            captain: false,
            player: false,
            user: true
          }
        }
        const postNewUser = yield call(userApi.postUser, user)
        if(postNewUser) {
          yield call(checkAuth)
          yield put(push(data.from))
          yield put(notifActions.popNotificationSuccess({message: `Welcome ${data.user.displayName}`}))
        } else {
          yield put(actions.signInFailure(postNewUser.error))
        }
      } else {
        yield call(checkAuth)
        yield put(push(data.from))
        yield put(notifActions.popNotificationSuccess({message: `Welcome back ${data.user.displayName}`}))
      }
    }
  } catch(error) {
    yield put(actions.signInFailure(error))
  }
}

function* logout(){
  try {
    yield put(actions.logoutPending())
    const data = yield call(authApi.logout)
    yield put(actions.logoutSuccess(data))
    yield call(checkAuth)
    yield put(push('/'))
    yield put(notifActions.popNotificationInfo({message: 'You are disconnected'}))
  } catch(error) {
    yield put(actions.logoutFailure(error))
  }
}

function* sagasAuth(){
  yield all([
    takeEvery(constants.CHECK_AUTH, checkAuth),
    takeEvery(constants.FETCH_SIGNIN, signIn),
    takeEvery(constants.FETCH_LOGOUT, logout)
  ])
}

export default sagasAuth