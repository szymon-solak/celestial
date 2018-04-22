import React, { Component } from 'react'

import Section from '../../components/section'

class Account extends Component {
  constructor() {
    super()
  }

  state = {
    error: null,
    success: false
  }

  render() {
    return (
      <Section>
        <h1>Account page</h1>
      </Section>
    )
  }
}

export default Account
