import React, { Component } from 'react'

import Section from '../../components/section'
import Text from '../../components/text'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'
import FormModal from './components/formModal'

import { Context } from '../../context'

import firebase from '../../services/firebase'

const reauthenticate = (password) => {
  const user = firebase.auth().currentUser

  const credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    password
  )

  return user.reauthenticateWithCredential(credential)
}

class Account extends Component {
  constructor() {
    super()

    this.showModal = this.showModal.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.sendVerificationMail = this.sendVerificationMail.bind(this)
  }

  state = {
    showModal: false,
    modalToShow: null,
    buttons: {
      verification: {
        loading: false,
        success: false
      }
    }
  }

  displayNameModal = () => (
    <FormModal
      show={this.state.showModal}
      title='Change display name'
      onClose={this.handleModalClose}
      label='New display name:'
      handleSubmit={async (name) => {
        const user = firebase.auth().currentUser
        return user.updateProfile({
          displayName: name
        })
      }}
    />
  )

  emailModal = () => (
    <FormModal
      show={this.state.showModal}
      title='Change e-mail address'
      onClose={this.handleModalClose}
      label='New email address:'
      type='email'
      requireReauth
      reauthenticate={reauthenticate}
      handleSubmit={async (email) => {
        const user = firebase.auth().currentUser

        return user.updateEmail(email)
      }}
    />
  )

  passwordModal = () => (
    <FormModal
      show={this.state.showModal}
      title='Change password'
      onClose={this.handleModalClose}
      label='New password:'
      type='password'
      confirm
      confirmLabel='Confirm password:'
      requireReauth
      reauthenticate={reauthenticate}
      handleSubmit={async (password) => {
        const user = firebase.auth().currentUser

        return user.updatePassword(password)
      }}
    />
  )

  showModal(modal) {
    this.setState({
      showModal: true,
      modalToShow: modal
    })
  }

  handleModalClose() {
    this.setState({
      showModal: false,
      modalToShow: null,
    })
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
        {
          (this.state.showModal)
            ? <this.state.modalToShow/>
            : null
        }
        <List title='Profile'>
          <ListItem>
            <div>
              <Text>Display name:</Text>
              <Context.Consumer>
                {
                  (context) => (
                    <Text bold>{context.user.displayName}</Text>
                  )
                }
              </Context.Consumer>
            </div>
            <Button
              onClick={() => this.showModal(this.displayNameModal)}
            >
              Change
            </Button>
          </ListItem>
          <ListItem>
            <div>
              <Text>Email:</Text>
              <Context.Consumer>
                {
                  (context) => (
                    <Text bold>{context.user.email}</Text>
                  )
                }
              </Context.Consumer>
            </div>
            <Button
              onClick={() => this.showModal(this.emailModal)}
            >
              Change
            </Button>
          </ListItem>
          <ListItem>
            <Text>Password</Text>
            <Button
              onClick={() => this.showModal(this.passwordModal)}
            >
              Change
            </Button>
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
