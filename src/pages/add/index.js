import React, { Component } from 'react'

import Section from '../../components/section'
import Title from '../../components/title'
import TitledTextArea from '../../components/text-area/titledTextArea'

import AddBlockBtn from './components/addBlockBtn'
import BlockTypeSelect from './components/blockTypeSelect'
import Block from './components/block'

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
    showTypes: false,
    blocks: [],
  }

  setTitle = (evt) => {
    const title = evt.target.value
    this.setState({
      title,
    })
  }

  handleAddClick = () => {
    this.setState({
      showTypes: true,
    })
  }

  appendBlock = (type) => {
    this.setState((state) => {
      if (state.blocks.length) {
        const lastIndex = state.blocks[state.blocks.length - 1].index
        return {
          blocks: state.blocks.concat({
            type,
            value: '',
            index: lastIndex + 1,
          }),
        }
      }

      return {
        blocks: state.blocks.concat({
          type,
          value: '',
          index: 0,
        }),
      }
    })
  }

  updateBlock = index => (evt) => {
    const value = evt.target.value

    const blocks = this.state.blocks.slice()
    blocks[index].value = value

    this.setState({
      blocks,
    })
  }

  handleTypeSelection = (type) => {
    this.setState({
      showTypes: false,
    })

    this.appendBlock(type)
  }

  render() {
    return (
      <Section>
        <Title center>Add a new entry</Title>
        <TitledTextArea
          title='Entry Title'
          value={this.state.title}
          onChange={this.setTitle}
        />
        {
          this.state.blocks.map(block => (
            <Block
              type={block.type}
              key={block.index}
              index={block.index}
              value={this.state.blocks[block.index].value}
              onChange={this.updateBlock(block.index)}
            />
          ))
        }
        {
          (this.state.showTypes)
            ? <BlockTypeSelect onTypeClick={this.handleTypeSelection}/>
            : <AddBlockBtn onClick={this.handleAddClick}/>
        }
      </Section>
    )
  }
}

export default Add
