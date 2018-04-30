import styled from 'styled-components'

const ListItem = styled.div`
  width: 100%;
  padding: 1em;

  display: flex;
  justify-content: space-between;

  & + & {
    border-top: 1px solid ${props => props.theme.border};
  }
`

export default ListItem
