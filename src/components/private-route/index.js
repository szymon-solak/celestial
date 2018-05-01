import React from 'react'
import PropTypes from 'prop-types'
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

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default PrivateRoute
