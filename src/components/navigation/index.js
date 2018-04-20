import React, { Component } from 'react'

import firebase from '../../services/firebase'

import Nav from './nav'
import Tab from './tab'

class Navigation extends Component {
  render() {
    const user = firebase.auth().currentUser

    if (!user) {
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

export default Navigation
