import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Teams from '../../pages/teams/Teams'
import SignIn from '../auth/signIn/SignIn'
import Error404 from '../error404/Error404'

import PrivateRoute from '../auth/privateRoute/PrivateRoute'

export class Routes extends React.PureComponent {

  static defaultProps = {
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    userRoles: PropTypes.shape({
      captain: PropTypes.bool.isRequired,
      player: PropTypes.bool.isRequired,
      user: PropTypes.bool.isRequired
    }).isRequired
  }

  render() {

    let { isAuthenticated, userRoles } = this.props

    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/signin" component={SignIn}/>
        <PrivateRoute path="/teams" isAuthenticated={isAuthenticated} component={Teams}/>
        <Route component={Error404} />
      </Switch>
      )

  }
}

export default withRouter(Routes)