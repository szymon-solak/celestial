import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Context } from '../../context';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Context.Consumer>
        {(context) => {
          if (!context.loggedIn) {
            return <Redirect to="/" />
          }

          return <Component {...props} />
        }}
      </Context.Consumer>
    )}
  />
)

export default PrivateRoute
