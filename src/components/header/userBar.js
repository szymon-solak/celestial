import React, { Fragment } from 'react'

import Image from '../image'
import Text from '../text'

import { Context } from '../../context'

const defaultAvatarURL = 'default_avatar.png'

const UserBar = () => (
  <Context.Consumer>
    {
      (context) => {
        if (!context.loggedIn) return null
        
        return (
          <Fragment>
            <Image
              icon={'true'}
              src={context.user.photoURL || defaultAvatarURL}
            />
            <Text spaced>{context.user.displayName}</Text>
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)

export default UserBar
