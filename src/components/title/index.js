import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.6em;
  text-transform: uppercase;
  color: ${props => props.theme.focus};
  width: 100%;

  display: flex;
  align-items: center;

  justify-content: ${props => (props.center ? 'center' : 'start')};
`

export default Title
