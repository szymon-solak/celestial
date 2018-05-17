import React from 'react'
import FontAwesome from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus'
import faList from '@fortawesome/fontawesome-free-solid/faList'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faCogs from '@fortawesome/fontawesome-free-solid/faCogs'

import { Context } from '../../context'

import Nav from './nav'
import Tab from './tab'
import Text from '../text'

const Navigation = () => (
  <Context.Consumer>
    {
      (context) => {
        if (!context.loggedIn) {
          return (
            <Nav>
              <Tab exact to='/'>
                <FontAwesome icon={faUser} />
                <Text spaced>Login</Text>
              </Tab>
              <Tab to='/register'>
                <FontAwesome icon={faUserPlus} />
                <Text spaced>Register</Text>
              </Tab>
            </Nav>
          )
        }

        return (
          <Nav>
            <Tab to='/list'>
              <FontAwesome icon={faList} />
              <Text spaced>Entries</Text>
            </Tab>
            <Tab to='/add'>
              <FontAwesome icon={faPlus} />
              <Text spaced>Add</Text>
            </Tab>
            <Tab to='/account'>
              <FontAwesome icon={faCogs} />
              <Text spaced>Account</Text>
            </Tab>
          </Nav>
        )
      }
    }
  </Context.Consumer>
)

export default Navigation
