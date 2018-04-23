import styled from 'styled-components'

const Base = styled.button`
  padding: 1em;

  border: none;
  background: ${props => props.theme.focus};
  color: ${props => props.theme.fontFocus};

  cursor: pointer;

  opacity: 1;

  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }
`

export default Base
