import React, { Fragment } from 'react'

import Text from '../../../components/text'
import Button from '../../../components/button'
import FormModal from './formModal'

import withModal from '../helpers/withModal'
import reauthenticate from '../helpers/reauthenticate'

import { Context } from '../../../context'

import firebase from '../../../services/firebase'

const ChangeEmail = ({
  show,
  showModal,
  handleModalClose,
}) => (
  <Fragment>
    <FormModal
      show={show}
      title='Change e-mail address'
      onClose={handleModalClose}
      label='New email address:'
      type='email'
      requireReauth
      reauthenticate={reauthenticate}
      handleSubmit={async (email) => {
        const user = firebase.auth().currentUser

        return user.updateEmail(email)
      }}
    />
    <div>
      <Text>Email:</Text>
      <Context.Consumer>
        {
          context => (
            <Text bold>{context.user.email}</Text>
          )
        }
      </Context.Consumer>
    </div>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

export default withModal(ChangeEmail)
