import React from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSignOutAlt from '@fortawesome/fontawesome-free-solid/faSignOutAlt'

import { signIn, logout } from '../../../services/authentication/actions'

export class SignUp extends React.Component {

  signIn = (mode) => {
    let { signIn } =  this.props
    signIn(mode)
  }

  render() {
    return <div>Sign up</div>
  }
}

function mapStateToProps(state) {
  return {
    dataCheckAuth: state.dataCheckAuth
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)