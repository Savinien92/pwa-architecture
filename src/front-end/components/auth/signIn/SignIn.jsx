import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'

import { signIn, logout } from '../../../services/authentication/actions'

export class SignIn extends React.Component {

  signIn = (mode) => {
    let { signIn } =  this.props
    signIn(mode)
  }

  logout = () => {
    let { logout } =  this.props
    logout()
  }

  render() {

    let { dataCheckAuth } = this.props
    let { from } = this.props.location.state || {from: {pathname:'/'}}
    let fromPath = from.pathname
    let mainContainer, container
    
    switch(dataCheckAuth.status){
      case 'none':
      case 'pending':
        mainContainer = <p>Loading ...</p>
        break
      case 'success':
        if(dataCheckAuth.isAuthenticated) {
          container = (
            <Button
              className="btn"
              variant="raised"
              onClick={this.logout}>
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                Logout
            </Button>
          )
        } else {
          container = (
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Button
                className="btn btn-facebook"
                variant="raised"
                onClick={() => this.signIn({mode: 'facebook', from: fromPath})}
                >
                  <FontAwesomeIcon
                    icon={['fab', 'facebook-square']}
                    size="lg"
                  />
                  Sign in with Facebook
              </Button>
              <Button
                className="btn btn-google"
                variant="raised"
                onClick={() => this.signIn({mode: 'google', from: fromPath})}
                >
                  <FontAwesomeIcon
                    icon={['fab', 'google-plus-square']}
                    size="lg"
                  />
                  Sign in with Google
              </Button>
            </div>
          )
        }
        mainContainer = (
          <div>
            <h1>Sign in</h1>
            <p>You from {fromPath}</p>
            {container}
          </div>
        )
        break
      case 'failure':
        break
      default:

      break
    }
    return (mainContainer)
  }
}

function mapStateToProps(state) {
  return {
    dataCheckAuth: state.dataCheckAuth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (mode) => {
      dispatch(signIn(mode))
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)