import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  border-top: .05em solid ${props => props.theme.fontColor}

  display: flex;
`

const Link = styled(NavLink)`
  position: relative;
  padding: 1em;
  flex: 1;
  text-align: center;

  text-decoration: none;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor}

  transition: all .11s ease-in-out;

  &:hover {
    background: ${props => props.theme.focus};
    color: ${props => props.theme.fontFocus};
  }

  &.active {
    color: ${props => props.theme.focus}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.border}
    transition: width .22s ease;
  }

  &.active::before {
    width: 100%;
  }
`

export {
  Nav,
  Link
}