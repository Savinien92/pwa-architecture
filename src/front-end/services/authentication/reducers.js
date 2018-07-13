import * as constants from './constants'

const initialState = {
  data: false,
  status: 'none',
  error: false,
  isAuthenticated: false
}

export const checkUserReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.CHECK_USER_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.CHECK_USER_SUCCESS:
      let data = Object.assign({}, action.data)
      return {
        ...state,
        data: data,
        status: 'success'
      }
    case constants.CHECK_USER_FAILURE:
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

export const checkAuthReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.CHECK_AUTH_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.CHECK_AUTH_SUCCESS:
      let data = Object.assign({}, action.data),
          isAuthenticated
      data.user ? isAuthenticated = true : isAuthenticated = false
      return {
        ...state,
        data: data,
        status: 'success',
        isAuthenticated: isAuthenticated
      }
    case constants.CHECK_AUTH_FAILURE:
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

export const signInReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_SIGNIN_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.FETCH_SIGNIN_SUCCESS:
      let data = Object.assign({}, action.data),
          isAuthenticated
      data.user ? isAuthenticated = true : isAuthenticated = false
      return {
        ...state,
        data: data,
        status: 'success',
        isAuthenticated: isAuthenticated
      }
    case constants.FETCH_SIGNIN_FAILURE:
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

export const logoutReducer = (state = initialState, action) => {
  switch(action.type){
    case constants.FETCH_LOGOUT_PENDING:
      return {
        ...state,
        status: 'pending'
      }
    case constants.FETCH_LOGOUT_SUCCESS:
      let data = Object.assign({}, action.data),
          isAuthenticated
      data.user ? isAuthenticated = true : isAuthenticated = false
      return {
        ...state,
        data: data,
        status: 'success',
        isAuthenticated: isAuthenticated
      }
    case constants.FETCH_LOGOUT_FAILURE:
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