import React, { Component } from 'react'
import styled from 'styled-components'

import firebase from '../../services/firebase'

import { Context } from '../../context'

const LogoutBtn = styled.button`
  padding: .6em;
  font-size: 1.2em;
  cursor: pointer;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};
  border: 1px solid ${props => props.theme.border};

  transition: all .22s ease-in-out;

  &:hover {
    background: ${props => props.theme.focus};
    color: ${props => props.theme.fontFocus};
  }
`

class Logout extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  state = {
    loading: false
  }

  handleClick() {
    firebase
      .auth()
      .signOut()
      .catch(console.error)
  }

  render() {
    return (
      <Context.Consumer>
        {
          (context) => {
            if (!context.loggedIn) return null

            return (
              <LogoutBtn onClick={this.handleClick}>
                Logout
              </LogoutBtn>
            )
          }
        }
      </Context.Consumer>
    )
  }
}

export default Logout
