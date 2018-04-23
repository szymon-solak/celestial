import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
  height: 3.8em;
  border-top: 1px solid ${props => props.theme.border}

  display: flex;

  position: fixed;
  bottom: 0;
`



export default Nav