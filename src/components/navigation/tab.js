import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Tab = styled(NavLink)`
  position: relative;
  flex: 1;
  text-align: center;
  font-size: 1.2em;
  padding: .6em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};

  transition: all .11s ease-in-out;

  &.active {
    color: ${props => props.theme.focus}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: scale(0);
    height: 2px;
    background: ${props => props.theme.border};
    transition: transform .22s ease;
  }

  &:hover::before, &.active::before {
    transform: scale(1);
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
    border-left: .5em solid transparent;
    border-right: .5em solid transparent;
    border-top: .5em solid ${props => props.theme.border};
  }

  @media (min-width: 40em) {
    flex-direction: row;
  }
`

export default Tab
