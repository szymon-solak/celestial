import styled from 'styled-components'

const Image = styled.img`
  width: ${props => (props.icon ? '3em' : '100%')};
  height: ${props => (props.icon ? '3em' : '100%')};

  border-radius: ${props => (props.icon ? '50%' : '')};
`

export default Image
