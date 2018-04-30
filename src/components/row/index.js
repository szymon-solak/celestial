import styled from 'styled-components'

const Row = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  flex: ${props => props.flex || 1};
`

export default Row
