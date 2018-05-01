import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Text from '../../../components/text'
import Button from '../../../components/button'
import FormModal from './formModal'

import withModal from '../helpers/withModal'
import reauthenticate from '../helpers/reauthenticate'

import firebase from '../../../services/firebase'

const ChangePassword = ({
  show,
  showModal,
  handleModalClose,
}) => (
  <Fragment>
    <FormModal
      show={show}
      title='Change password'
      onClose={handleModalClose}
      label='New password:'
      type='password'
      confirm
      confirmLabel='Confirm password:'
      requireReauth
      reauthenticate={reauthenticate}
      handleSubmit={async (password) => {
        const user = firebase.auth().currentUser

        return user.updatePassword(password)
      }}
    />
    <Text>Password</Text>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

ChangePassword.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

export default withModal(ChangePassword)
