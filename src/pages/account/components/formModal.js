import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Modal from '../../../components/modal'
import {
  Form,
  Label,
  Input
} from '../../../components/form'
import Button from '../../../components/button'
import ErrorBox from '../../../components/error'

class FormModal extends Component {
  state = {
    value: '',
    confirm: '',
    password: '',
    loading: false,
    error: null,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()

    if (this.props.confirm) {
      if (this.state.value !== this.state.confirm) {
        this.handleError({
          message: 'The inputs do not match. Please try typing them again.',
        })
        return
      }
    }

    this.setState({
      loading: true,
    })

    try {
      if (this.props.requireReauth) {
        await this.props.reauthenticate(this.state.password)
      }

      await this.props.handleSubmit(this.state.value)

      this.setState({
        value: '',
        password: '',
        confirm: '',
        error: null,
        loading: false,
      })

      this.props.onClose()
    } catch (err) {
      this.handleError(err)
    }
  }

  handleError = ({ message }) => {
    this.setState({
      error: message,
      loading: false,
    })
  }

  handleClose = () => {
    this.setState({
      value: '',
      password: '',
      confirm: '',
      error: null,
      loading: false,
    })

    this.props.onClose()
  }

  render() {
    return (
      <Modal
        title={this.props.title}
        show={this.props.show}
        onClose={this.handleClose}
      >
        {
          (this.state.error)
            ? <ErrorBox>
                {this.state.error}
              </ErrorBox>
            : null
        }
        <Form onSubmit={this.handleSubmit}>
          {
            (this.props.requireReauth)
              ? (
                  <Fragment>
                    <Label>Please enter your current password:</Label>
                    <Input
                      name='password'
                      type='password'
                      onChange={this.handleChange}
                      value={this.state.password}
                    />
                  </Fragment>
                )
              : null
          }
          <Label>{this.props.label}</Label>
          <Input
            name='value'
            type={this.props.type || 'text'}
            onChange={this.handleChange}
            value={this.state.value}
          />
          {
            (this.props.confirm)
              ? (
                  <Fragment>
                    <Label>{this.props.confirmLabel}</Label>
                    <Input
                      name='confirm'
                      type={this.props.type || 'text'}
                      onChange={this.handleChange}
                      value={this.state.confirm}
                    />
                  </Fragment>
                )
              : null
          }
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

FormModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  confirm: PropTypes.bool,
  confirmLabel: PropTypes.string,
  requireReauth: PropTypes.bool,
  reauthenticate: PropTypes.func,
}

export default FormModal
