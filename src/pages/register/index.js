import React from 'react'

import Section from '../../components/section'
import {
  Form,
  Label,
  Input,
  Submit
} from '../../components/form'

const Register = (props) => (
  <Section>
    <Form>
      <Label>Email:</Label>
      <Input
        type='email'
        placeholder='john@smith.com'
      />
      <Label>Password:</Label>
      <Input
        type='password'
      />
      <Label>Confirm password:</Label>
      <Input
        type='password'
      />
      <Submit value='Register'/>
    </Form>
  </Section>
)

export default Register
