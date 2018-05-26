import TextArea from 'react-textarea-autosize'
import styled from 'styled-components'

const StyledTextArea = styled(TextArea)`
  width: 100%;
  padding: 1em .6em;
  font-size: 1.4em;

  background: ${props => props.theme.background};
  resize: none;
  outline: none;
  overflow: auto;

  border-left: .1em solid ${props => props.theme.border};

  transition: border-left .3s ease;

  &:focus {
    border-left: .5em solid ${props => props.theme.border};
  }
`

export default StyledTextArea
