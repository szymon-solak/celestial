import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: .6em;
  margin-bottom: 1em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.border};

  user-select: none;
`

export default Header
