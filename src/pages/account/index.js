import React, { Component } from 'react'

import Section from '../../components/section'
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
        <List title='Settings'>
          <ListItem>
            <Button danger>Danger button</Button>
          </ListItem>
          <ListItem>
            <h1>Hi</h1>
          </ListItem>
          <ListItem>
            <h1>Hi 2</h1>
          </ListItem>
          <ListItem>
            <h1>Some text and a button</h1>
            <Button success>Danger button</Button>
          </ListItem>
        </List>
      </Section>
    )
  }
}

export default Account
