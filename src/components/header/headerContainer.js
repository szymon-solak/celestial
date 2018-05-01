import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;

  border-bottom: 1px solid ${props => props.theme.border};

  display: flex;
  justify-content: space-between;

  user-select: none;
`

export default HeaderContainer
