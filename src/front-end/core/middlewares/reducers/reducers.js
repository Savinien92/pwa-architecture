import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { getUsersReducer, getUserReducer, postUserReducer } from '../../../services/users/reducers'
import { checkAuthReducer, signInReducer, logoutReducer, checkUserReducer } from '../../../services/authentication/reducers'

const allReducers = combineReducers({
  route: routerReducer,
  dataUsers: getUsersReducer,
  dataUser: getUserReducer,
  postUser: postUserReducer,
  dataCheckUser: checkUserReducer,
  dataCheckAuth: checkAuthReducer,
  dataLogin: signInReducer,
  dataLogout: logoutReducer
})

export default allReducers