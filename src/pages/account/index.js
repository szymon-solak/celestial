import React, { Component } from 'react'

import Section from '../../components/section'
import Text from '../../components/text'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'

import ChangeDisplayName from './components/changeDisplayName'
import ChangeEmail from './components/changeEmail'
import ChangePassword from './components/changePassword'

import { Context } from '../../context'

import firebase from '../../services/firebase'

class Account extends Component {
  constructor() {
    super()

    this.sendVerificationMail = this.sendVerificationMail.bind(this)
  }

  state = {
    buttons: {
      verification: {
        loading: false,
        success: false
      }
    }
  }

  sendVerificationMail() {
    const user = firebase.auth().currentUser

    this.setState({
      buttons: {
        verification: {
          loading: true
        }
      }
    })

    user
      .sendEmailVerification()
      .then(() => {
        this.setState({
          buttons: {
            verification: {
              loading: false,
              success: true
            }
          }
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          buttons: {
            verification: {
              loading: false
            }
          }
        })
      })
  }

  render() {
    return (
      <Section>
        <List title='Profile'>
          <ListItem>
            <ChangeDisplayName />
          </ListItem>
          <ListItem>
            <ChangeEmail />
          </ListItem>
          <ListItem>
            <ChangePassword />
          </ListItem>
          <ListItem>
            <Text>Image here (no tag yet)</Text>
            <Button disabled>Change</Button>
          </ListItem>
          <ListItem>
            <Text>Confirm e-mail address</Text>
            <Context.Consumer>
              {
                (context) => {
                  if (!context.user.emailVerified) {
                    return (
                      <Button
                        onClick={this.sendVerificationMail}
                        loading={this.state.buttons.verification.loading}
                        success={this.state.buttons.verification.success}
                      >
                        Send confirmation mail
                      </Button>
                    )
                  }

                  return (
                    <Button success>Send confirmation email</Button>
                  )
                }
              }
            </Context.Consumer>
          </ListItem>
          <ListItem>
            <Text>Delete my account</Text>
            <Button danger disabled>Delete</Button>
          </ListItem>
        </List>
        <List title='Data'>
          <ListItem>
            <Text>Export my entries</Text>
            <Button disabled>Export</Button>
          </ListItem>
          <ListItem>
            <Text>Import entries</Text>
            <Button disabled>Import</Button>
          </ListItem>
        </List>
      </Section>
    )
  }
}

export default Account
