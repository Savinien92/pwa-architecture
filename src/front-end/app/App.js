import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ResponsiveDrawer from '../components/navigation/ResponsiveDrawer'
import Routes from '../components/routes/Routes'
import Loader from '../components/loader/Loader'

import { checkAuth } from '../services/authentication/actions'

export class App extends React.PureComponent {

  static propTypes = {
    checkAuth: PropTypes.func.isRequired
  }

  componentWillMount() {
    let { checkAuth } = this.props
    checkAuth()
  }

  render() {

    let { dataCheckAuth } = this.props
    let container

    console.log('dataCheckAuth', dataCheckAuth)

    switch(dataCheckAuth.status) {
      case 'success':
        container = (
          <Routes
            isAuthenticated={dataCheckAuth.isAuthenticated}
            userRoles={dataCheckAuth.data.user.roles ? dataCheckAuth.data.user.roles : false}
          />
        )
      break
      case 'failure':
        container = (
          <div>Error occured ...</div>
        )
      break
      default:
        container = <Loader />
    }
    
    return (
      <div>
        <ResponsiveDrawer
          title="PWA Architecture"
          isAuthenticated={dataCheckAuth.isAuthenticated}
          user={dataCheckAuth.data ? dataCheckAuth.data.user : false}
        >
          {container}
        </ResponsiveDrawer>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    dataCheckAuth: state.dataCheckAuth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkAuth: () => {
      dispatch(checkAuth())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))