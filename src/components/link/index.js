import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${props => props.theme.focus};

  padding: .3em;
`

export default Link
