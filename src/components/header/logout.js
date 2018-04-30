import React, { Component } from 'react'

import Button from '../button'

import firebase from '../../services/firebase'

import { Context } from '../../context'

class Logout extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    loading: false
  }

  handleClick() {
    this.setState({
      loading: true
    })

    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          loading: false
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <Context.Consumer>
        {
          (context) => {
            if (!context.loggedIn) return null

            return (
              <Button
                onClick={this.handleClick}
                loading={this.state.loading}
              >
                Logout
              </Button>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default Logout
