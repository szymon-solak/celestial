import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'

import Row from '../../../components/row'
import BaseBtn from '../../../components/button/base'

const Button = BaseBtn.extend`
  width: 100%;
  min-height: 8em;

  background: ${props => props.theme.background};
  color: ${props => props.theme.focus};

  transition: all .2s linear;

  &:hover {
    background: ${props => props.theme.focus};
    color: ${props => props.theme.fontFocus};
  }
`

const AddBlockBtn = ({ onClick }) => (
  <Row flex='0'>
    <Button onClick={onClick}>
      <FontAwesome icon={faPlus} />
    </Button>
  </Row>
)

AddBlockBtn.propTypes = {
  onClick: PropTypes.func,
}

export default AddBlockBtn
