import React, { Component } from 'react'

import Modal from '../../../components/modal'
import {
  Form,
  Label,
  Input
} from '../../../components/form'
import Button from '../../../components/button'
import ErrorBox from '../../../components/error'

class FormModal extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  state = {
    value: '',
    loading: false,
    error: null,
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    this.setState({
      loading: true
    })

    this.props
      .handleSubmit(this.state.value)
      .catch(this.handleError)

    evt.target.reset()
  }

  handleError({ message }) {
    this.setState({
      error: message,
      loading: false,
    })
  }

  render() {
    return (
      <Modal
        title={this.props.title}
        show={this.props.show}
        onClose={this.props.onClose}
      >
        {
          (this.state.error)
            ? <ErrorBox>
                {this.state.error}
              </ErrorBox>
            : null
        }
        <Form onSubmit={this.handleSubmit}>
          <Label>{this.props.label}</Label>
          <Input
            type={this.props.type || 'text'}
            onChange={this.handleChange}
            value={this.state.value}
          />
          <Button
            type='submit'
            loading={this.state.loading}
          >
            Change
          </Button>
        </Form>
      </Modal>
    )
  }
}

export default FormModal
