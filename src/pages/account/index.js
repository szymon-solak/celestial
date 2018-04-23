import React, { Component } from 'react'

import Section from '../../components/section'
import Text from '../../components/text'
import Modal from '../../components/modal'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'

class Account extends Component {
  constructor() {
    super()

    this.handleModalClose = this.handleModalClose.bind(this)
  }

  state = {
    error: null,
    success: false,
    showModal: false,
    modalTitle: ''
  }

  handleModalClose() {
    this.setState({
      showModal: false,
      modalTitle: ''
    })
  }

  render() {
    return (
      <Section>
        <Modal
          show={this.state.showModal}
          title={this.state.modalTitle}
          onClose={this.handleModalClose}
        >
        </Modal>
        <List title='Profile'>
          <ListItem>
            <div>
              <Text>Display name:</Text>
              <Text bold>SomeUserName</Text>
            </div>
            <Button>Change</Button>
          </ListItem>
          <ListItem>
            <div>
              <Text>Email:</Text>
              <Text bold>user@service.com</Text>
            </div>
            <Button>Change</Button>
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
