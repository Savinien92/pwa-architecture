import React from 'react'
import ReactDOM from 'react-dom'

// Service Worker
import registerServiceWorker from './registerServiceWorker'

// Routing
import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Reducers
import allReducers from './front-end/core/middlewares/reducers/reducers'

// Redux
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
// Redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

// Saga
import createSagaMiddleware from 'redux-saga'
import sagasAuth from './front-end/services/authentication/sagas'
import sagasUsers from './front-end/services/users/sagas'

// Firebase
import firebase from './front-end/core/firebase/config'

// Notifications
import notificationMiddleware from './front-end/core/middlewares/notifications/reducers'

// Fontawesome
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

// Material-ui theme
import { MuiThemeProvider } from 'material-ui/styles'
import { theme } from './front-end/core/theme/theme'

// App imports
import './index.scss'
import App from './front-end/app/App'

// Production / Developpement
let production  = process.env.NODE_ENV === 'production' ? true : false

// History
const history = createHistory()
const historyMiddleware = routerMiddleware(history)

// Saga
const sagaMiddleware = createSagaMiddleware()

// Redux persite
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['dataUsers']
}

// All middleware
let middleware = applyMiddleware(
  sagaMiddleware,
  historyMiddleware,
  notificationMiddleware.middleware
)

const persistedReducer = persistReducer(persistConfig, allReducers)

// If not production
if(!production) {
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension())
  }
}

const store = createStore(
  persistedReducer,
  middleware
)

let persistor = persistStore(store)

sagaMiddleware.run(sagasUsers)
sagaMiddleware.run(sagasAuth)

fontawesome.library.add(brands)

firebase.init()

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </MuiThemeProvider>
    </PersistGate>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()