import styled from 'styled-components'

const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  flex: ${props => props.flex || 1};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`

export default Row
