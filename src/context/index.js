import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import firebase from '../services/firebase'

// Import themes
import tealDrop from '../themes/teal-drop'
import urbanScaffold from '../themes/urban-scaffold'

const Context = React.createContext()

class Provider extends Component {
  state = {
    loggedIn: false,
    user: null,
    // Default theme
    // @TODO - Add an options to change theme and
    // save it somewhere (firebase/localstorage)
    theme: tealDrop,
  }

  themes = {
    'Teal Drop': tealDrop,
    'Urban Scaffold': urbanScaffold,
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

  changeTheme = (themeName) => {
    if (!Object.keys(this.themes).includes(themeName)) return

    this.setState({
      theme: this.themes[themeName],
    })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Context.Provider value={{
          ...this.state,
          themes: this.themes,
          changeTheme: this.changeTheme,
        }}>
          {this.props.children}
        </Context.Provider>
      </ThemeProvider>
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
