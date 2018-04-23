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
        <Modal
          show={this.state.showModal}
          title={this.state.modalTitle}
          onClose={this.handleModalClose}
        >
        </Modal>
        <Button danger>Danger button</Button>
        <Button>Classic button</Button>
        <Button success>Success button</Button>
        <Button loading>Loading button</Button>
      </Section>
    )
  }
}

export default Account
