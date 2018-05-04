import React from 'react'

import Section from '../../components/section'
import Text from '../../components/text'
import Button from '../../components/button'
import {
  List,
  ListItem
} from '../../components/list'

import SelectTheme from './components/selectTheme'

import ChangeDisplayName from './components/changeDisplayName'
import ChangeEmail from './components/changeEmail'
import ChangePassword from './components/changePassword'
import ChangeImage from './components/changeImage'
import VerifyEmail from './components/verifyEmail'

const Account = () => (
  <Section>
    <List title='Prefrences'>
      <SelectTheme />
    </List>
    <List title='Profile'>
      <ListItem>
        <ChangeDisplayName />
      </ListItem>
      <ListItem>
        <ChangeEmail />
      </ListItem>
      <ListItem>
        <ChangePassword />
      </ListItem>
      <ListItem>
        <ChangeImage />
      </ListItem>
      <ListItem>
        <VerifyEmail />
      </ListItem>
      <ListItem>
        <Text>Delete my account</Text>
        <Button danger disabled>Delete</Button>
      </ListItem>
    </List>
    <List title='Data'>
      <ListItem>
        <Text>Export my entries</Text>
        <Button disabled>Export</Button>
      </ListItem>
      <ListItem>
        <Text>Import entries</Text>
        <Button disabled>Import</Button>
      </ListItem>
    </List>
  </Section>
)

export default Account
