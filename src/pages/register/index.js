import React, { Component } from 'react'
import PropTypes from 'prop-types'

import firebase from '../../services/firebase'

import Section from '../../components/section'
import Title from '../../components/title'
import {
  Form,
  Label,
  Input,
  Submit
} from '../../components/form'
import Spinner from '../../components/loading/spinner'
import ErrorBox from '../../components/error'

class Register extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
    loading: false,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const {
      email,
      password,
      confirmPassword,
    } = this.state

    if (password !== confirmPassword) {
      this.handleError({
        message: 'Passwords do not match, please try entering them again.',
      })
      return
    }

    this.setState({
      loading: true,
    })

    // On success user is signed in automatically
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Redirect to home page
        this.props.history.push('/')
      })
      .catch(this.handleError)
  }

  handleError = ({ message }) => {
    this.setState({
      error: message,
      loading: false,
    })
  }

  render() {
    return (
      <Section>
        <Title>Register</Title>
        <Form onSubmit={this.handleSubmit}>
          <Label>Email:</Label>
          <Input
            name='email'
            type='email'
            placeholder='john@smith.com'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Label>Password:</Label>
          <Input
            name='password'
            type='password'
            placeholder='*****'
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Label>Confirm password:</Label>
          <Input
            name='confirmPassword'
            type='password'
            placeholder='*****'
            onChange={this.handleChange}
            value={this.state.confirmPassword}
          />
          {
            (this.state.error)
              ? <ErrorBox>
                  {this.state.error}
                </ErrorBox>
              : null
          }
          {
            (this.state.loading)
              ? <Spinner />
              : <Submit value='Register'/>
          }
        </Form>
      </Section>
    )
  }
}

Register.propTypes = {
  history: PropTypes.object,
}

export default Register
