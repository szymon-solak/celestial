import React from 'react'

import { Context } from '../../context'

import Nav from './nav'
import Tab from './tab'

const Navigation = () => (
  <Context.Consumer>
    {
      (context) => {
        if (!context.loggedIn) {
          return (
            <Nav>
              <Tab exact to='/'>Login</Tab>
              <Tab to='/register'>Register</Tab>
          </Nav>
          )
        }

        return (
          <Nav>
            <Tab to='/list'>Entries</Tab>
            <Tab to='/add'>Add</Tab>
          </Nav>
        )
      }
    }
  </Context.Consumer>
)

export default Navigation
