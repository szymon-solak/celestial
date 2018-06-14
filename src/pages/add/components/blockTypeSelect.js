import React from 'react'
import PropTypes from 'prop-types'
import { keyframes } from 'styled-components'

import Row from '../../../components/row'
import {
  Select,
  Option
} from '../../../components/select'

const appear = keyframes`
  0% {
    transform: translateX(-120%)
  }

  90% {
    transform: translateX(-15%)
  }

  100% {
    transform: translateX(0)
  }
`

const Type = Option.extend`
  color: ${props => props.theme.fontFocus};
  background: ${props => props.theme.focus};

  transform: translateX(-120%);
  animation: ${appear} .35s ease forwards;
  animation-delay: ${props => props.delay}s;
`

const types = [
  'title',
  'text',
  'image',
  'full-width image',
  'quote',
]

const BlockTypeSelect = ({ onTypeClick }) => (
  <Row wrap='true' flex='0'>
    <Select onChange={onTypeClick}>
      {types.map((type, index) => (
        <Type key={index} delay={index / 10} value={type}>
          {type}
        </Type>
      ))}
    </Select>
  </Row>
)

BlockTypeSelect.propTypes = {
  onTypeClick: PropTypes.func.isRequired,
}

export default BlockTypeSelect
