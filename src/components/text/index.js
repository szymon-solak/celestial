import styled from 'styled-components'

const Text = styled.p`
  color: ${props => props.theme.fontColor};
  -webkit-font-smoothing: antialiased;

  display: flex;
  align-items: center;

  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`

export default Text
