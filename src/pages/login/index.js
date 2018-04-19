import React from 'react'

import Section from '../../components/section'
import Title from '../../components/title'
import {
  Form,
  Label,
  Input,
  Submit
} from '../../components/form'

const Login = (props) => (
  <Section>
    <Title>Login</Title>
    <Form>
      <Label>Email:</Label>
      <Input type='email' placeholder='john@smith.com' />
      <Label>Password:</Label>
      <Input type='password' placeholder='******' />
      <Submit value='Log in'/>
    </Form>
  </Section>
)

export default Login
