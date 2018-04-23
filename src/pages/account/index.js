import React, { Component } from 'react'

import Section from '../../components/section'
import Modal from '../../components/modal'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'
import Text from '../../components/text'

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
            <Text>Hi</Text>
          </ListItem>
          <ListItem>
            <Text>Hi 2</Text>
          </ListItem>
          <ListItem>
            <Text>Some text and a button</Text>
            <Button success>Danger button</Button>
          </ListItem>
        </List>
      </Section>
    )
  }
}

export default Account
