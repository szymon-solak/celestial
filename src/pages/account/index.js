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

class Account extends Component {
  constructor() {
    super()

    this.showModal = this.showModal.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  state = {
    showModal: false,
    modalToShow: null,
  }

  displayNameModal = () => (
    <FormModal
      show={this.state.showModal}
      title='Change display name'
      onClose={this.handleModalClose}
      label='New display name:'
      handleSubmit={async (name) => {
        const user = firebase.auth().currentUser
        return user
          .updateProfile({
            displayName: name
          })
          .then(() => {
            this.handleModalClose()
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
      handleSubmit={async (email) => {
        console.log(email)
        return email
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
            <Button disabled>Change</Button>
          </ListItem>
          <ListItem>
            <Text>Image here (no tag yet)</Text>
            <Button disabled>Change</Button>
          </ListItem>
          <ListItem>
            <Text>Confirm e-mail address</Text>
            <Button disabled>Send confirmation mail</Button>
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
