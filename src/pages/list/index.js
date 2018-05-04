import React, { Component } from 'react'

import Section from '../../components/section'
import Title from '../../components/title'
import Text from '../../components/text'
import Link from '../../components/link'

class List extends Component {
  state = {
    entries: [],
  }

  render() {
    if (!this.state.entries.length) {
      return (
        <Section>
          <Title center>No entries yet..</Title>
          <Text center>Your entries will appear here.</Text>
          <Text center>
            You can go to the
            <Link to='/add'> Add </Link>
            tab to add new entry
          </Text>
        </Section>
      )
    }

    return (
      <Section>
        <Text>Entries</Text>
      </Section>
    )
  }
}

export default List
