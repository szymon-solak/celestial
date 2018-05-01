import React, { Component } from 'react'
import PropTypes from 'prop-types'

import firebase from '../services/firebase'

const Context = React.createContext()

class Provider extends Component {
  state = {
    loggedIn: false,
    user: null,
  }

  componentWillMount() {
    this.unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            loggedIn: true,
            user,
          })
        } else {
          this.setState({
            loggedIn: false,
            user: null,
          })
        }
      })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.element,
}

export {
  Context,
  Provider
}
