import React, { Component } from 'react'

import Section from '../../components/section'
import Title from '../../components/title'
import TitledTextArea from '../../components/text-area/titledTextArea'

import AddBlockBtn from './components/addBlockBtn'

const today = () => {
  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth() + 1
  const year = now.getFullYear()

  return `${day}/${month}/${year}`
}

class Add extends Component {
  state = {
    title: today(),
    blocks: [],
  }

  setTitle = (evt) => {
    const title = evt.target.value
    this.setState({
      title,
    })
  }

  handleAddClick = () => {
    console.log('Add')
  }

  render() {
    return (
      <Section>
        <Title center>Add a new entry</Title>
        <TitledTextArea
          title='Title'
          value={this.state.title}
          onChange={this.setTitle}
        />
        <AddBlockBtn onClick={this.handleAddClick}/>
      </Section>
    )
  }
}

export default Add
