import React from 'react'

import HeaderContainer from './headerContainer'
import UserBar from './userBar'
import Logout from './logout'
import Title from '../title'
import Link from '../link'
import Row from '../row'

const Header = () => (
  <HeaderContainer>
    <Row flex={6}>
      <Title>
        <Link exact to='/'>Celestial</Link>
      </Title>
    </Row>
    <Row>
      <UserBar />
      <Logout />
    </Row>
    
  </HeaderContainer>
)

export default Header
