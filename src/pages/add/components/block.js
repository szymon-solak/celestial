import React from 'react'
import PropTypes from 'prop-types'

import TitledTextArea from '../../../components/text-area/titledTextArea'

const Block = ({
  type,
  index,
  value,
  onChange,
}) => {
  if (type === 'text') {
    return (
      <TitledTextArea
        title={'Text'}
        value={value}
        onChange={onChange}
      />
    )
  }

  return (
    <p>{index}: {type}</p>
  )
}

Block.propTypes = {
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Block
