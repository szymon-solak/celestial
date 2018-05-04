import styled from 'styled-components'

const Option = styled.option`
  width: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};

  font-size: 1.2em;
`

export default Option
