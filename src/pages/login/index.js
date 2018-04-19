import React from 'react'

import Section from '../../components/section'
import {
  Form,
  Label,
  Input,
  Submit
} from '../../components/form'

const Login = (props) => (
  <Section>
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
