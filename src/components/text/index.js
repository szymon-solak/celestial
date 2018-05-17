import styled from 'styled-components'

const Text = styled.p`
  -webkit-font-smoothing: antialiased;

  display: flex;
  align-items: center;

  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  padding: ${props => (props.spaced ? '.6em' : '0')};

  justify-content: ${props => (props.center ? 'center' : 'start')};
`

export default Text
