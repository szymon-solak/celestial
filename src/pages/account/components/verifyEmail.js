import React, { Component, Fragment } from 'react'

import Text from '../../../components/text'
import Button from '../../../components/button'

import { Context } from '../../../context'

import firebase from '../../../services/firebase'

class VerifyEmail extends Component {
  state = {
    loading: false,
    success: false,
  }

  sendVerificationMail = () => {
    const user = firebase.auth().currentUser

    this.setState({
      loading: true,
    })

    user
      .sendEmailVerification()
      .then(() => {
        this.setState({
          loading: false,
          success: true,
        })
      })
      .catch(() => {
        this.setState({
          loading: false,
        })
      })
  }

  render() {
    return (
      <Fragment>
        <Text>Confirm e-mail address</Text>
        <Context.Consumer>
          {
            (context) => {
              if (!context.user.emailVerified) {
                return (
                  <Button
                    onClick={this.sendVerificationMail}
                    loading={this.state.loading}
                    success={this.state.success}
                  >
                    Send confirmation mail
                  </Button>
                )
              }

              return (
                <Button success></Button>
              )
            }
          }
        </Context.Consumer>
      </Fragment>
    )
  }
}

export default VerifyEmail
