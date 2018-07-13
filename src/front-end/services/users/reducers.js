import { REHYDRATE } from 'redux-persist'
import * as constants from './constants'

const initialState = {
  data: false,
  status: 'none',
  error: false,
}

export const getUsersReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_USERS_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.FETCH_USERS_SUCCESS:
      let data = Object.assign({}, action.data)
      return {
        ...state,
        data: data,
        status: 'success'
      }
    case constants.FETCH_USERS_FAILURE:
      let error = Object.assign({}, action.error)
      return {
        ...state,
        error: error,
        status: 'failure'
      }
    case REHYDRATE:
      if (action.payload) {
        const dataSaved = action.payload.dataUsers
        return {
          data: dataSaved.data,
          status: dataSaved.status,
          error: dataSaved.error
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export const getUserReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_USER_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.FETCH_USER_SUCCESS:
      let data = Object.assign({}, action.data)
      return {
        ...state,
        data: data,
        status: 'success'
      }
    case constants.FETCH_USER_FAILURE:
      let error = Object.assign({}, action.error)
      return {
        ...state,
        error: error,
        status: 'failure'
      }
    default:
      return state
  }
}

export const postUserReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.POST_USER_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.POST_USER_SUCCESS:
      let data = Object.assign({}, action.data)
      return {
        ...state,
        data: data,
        status: 'success'
      }
    case constants.POST_USER_FAILURE:
      let error = Object.assign({}, action.error)
      return {
        ...state,
        error: error,
        status: 'failure'
      }
    default:
      return state
  }
}

export default {
  getUsersReducer: getUsersReducer,
  getUserReducer: getUserReducer,
  postUserReducer: postUserReducer
}