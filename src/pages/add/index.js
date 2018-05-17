import React, { Component } from 'react'

import Section from '../../components/section'
import Title from '../../components/title'

import AddBlockBtn from './components/addBlockBtn'

class Add extends Component {
  state = {
    blocks: [],
  }

  handleAddClick = () => {
    console.log('Add')
  }

  render() {
    return (
      <Section>
        <Title center>Add a new entry</Title>
        <AddBlockBtn onClick={this.handleAddClick}/>
      </Section>
    )
  }
}

export default Add
