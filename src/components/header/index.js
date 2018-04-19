import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  padding: 1em;

  border-bottom: 1px solid ${props => props.theme.border};

  display: flex;
  justify-content: space-between;
`

export default Header
