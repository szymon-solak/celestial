import React, { Component } from 'react'

import Section from '../../components/section'
import Text from '../../components/text'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'
import FormModal from './components/formModal'

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
        console.log(name)
        return name
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
              <Text bold>SomeUserName</Text>
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
              <Text bold>user@service.com</Text>
            </div>
            <Button
              onClick={() => this.showModal(this.emailModal)}
            >
              Change
            </Button>
          </ListItem>
          <ListItem>
            <Text>Password</Text>
            <Button>Change</Button>
          </ListItem>
          <ListItem>
            <Text>Image here (no tag yet)</Text>
            <Button>Change</Button>
          </ListItem>
          <ListItem>
            <Text>Confirm e-mail address</Text>
            <Button>Send confirmation mail</Button>
          </ListItem>
          <ListItem>
            <Text>Delete my account</Text>
            <Button danger>Delete</Button>
          </ListItem>
        </List>
        <List title='Data'>
          <ListItem>
            <Text>Export my entries</Text>
            <Button>Export</Button>
          </ListItem>
          <ListItem>
            <Text>Import entries</Text>
            <Button>Import</Button>
          </ListItem>
        </List>
      </Section>
    )
  }
}

export default Account
