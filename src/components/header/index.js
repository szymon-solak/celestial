import React from 'react'

import HeaderContainer from './headerContainer'
import Logout from './logout'
import Title from '../title'
import Link from '../link'

const Header = () => (
  <HeaderContainer>
    <Title>
      <Link exact to='/'>Celestial</Link>
    </Title>
    <Logout />
  </HeaderContainer>
)

export default Header
