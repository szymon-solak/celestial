import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
  width: 100%;
  border-top: 1px solid ${props => props.theme.border}

  display: flex;
`

const Link = styled(NavLink)`
  position: relative;
  flex: 1;
  text-align: center;
  font-size: 1.4em;
  padding: .6em;

  text-decoration: none;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor}

  transition: all .11s ease-in-out;

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

  &:hover::before, &.active::before {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    border-top: 0px solid ${props => props.theme.border};
    transition: all .11s ease-in-out;
  }

  &.active::after {
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 12px solid ${props => props.theme.border};
  }
`

export {
  Nav,
  Link
}