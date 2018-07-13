import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthenticated ? 
      <Component {...props} /> :
      <Redirect
        to={{
          pathname: "/signin",
          state: { from: props.location }
        }}
      />
    }
  />
);

export default PrivateRoute