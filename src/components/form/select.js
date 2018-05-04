import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  border: 1px solid ${props => props.theme.border};

  padding: 1em;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};

  transition: all .22s linear;

  &:hover {
    background: ${props => props.theme.focus};
    color: ${props => props.theme.fontFocus};
  }
`

export default Select
