import React, { Component } from 'react'

import Section from '../../components/section'
import Modal from '../../components/modal'
import Button from '../../components/button'

class Account extends Component {
  constructor() {
    super()

    this.handleModalClose = this.handleModalClose.bind(this)
  }

  state = {
    error: null,
    success: false,
    showModal: true,
    modalTitle: 'Test'
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
        <h1>Account page</h1>
        <Modal
          show={this.state.showModal}
          title={this.state.modalTitle}
          onClose={this.handleModalClose}
        >
          <h1>Inside Stuff</h1>
          <Button danger>Danger button</Button>
          <Button>Classic button</Button>
          <Button success>Success button</Button>
          <Button loading>Loading button</Button>
        </Modal>
      </Section>
    )
  }
}

export default Account
