import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '../title'
import TextArea from './'

const Wrapper = styled.article`
  width: 100%;
`

const TitledTextArea = ({ title, value, onChange }) => (
  <Wrapper wrap={'true'}>
    <Title>{title}</Title>
    <TextArea onChange={onChange} value={value} />
  </Wrapper>
)

TitledTextArea.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default TitledTextArea
