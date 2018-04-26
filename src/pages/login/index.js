import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import firebase from '../../services/firebase'

import { Context } from '../../context'

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

class Login extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  state = {
    email: '',
    password: '',
    loggedIn: false,
    loading: false,
    error: null
  }

  componentDidMount() {
    // Check if user is logged in already
    const user = firebase.auth().currentUser

    if (user) {
      this.setState({
        loggedIn: false
      })
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const {
      email,
      password
    } = this.state

    this.setState({
      loading: true
    })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(this.handleError)
  }

  handleError({ message }) {
    this.setState({
      error: message,
      loading: false
    })
  }

  render() {
    return (
      <Section>
        <Context.Consumer>
          {
            (context) => {
              if (context.loggedIn) {
                return (
                  <Redirect to='/list' />
                )
              }
            }
          }
        </Context.Consumer>
        <Title>Login</Title>
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
            placeholder='******'
            onChange={this.handleChange}
            value={this.state.password}
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
              : <Submit value='Log in'/>
          }
        </Form>
      </Section>
    )
  }
}

export default Login
