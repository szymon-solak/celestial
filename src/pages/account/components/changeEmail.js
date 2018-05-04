import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Text from '../../../components/text'
import Button from '../../../components/button'
import Row from '../../../components/row'
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
    <Row wrap={'true'}>
      <Text>Email:</Text>
      <Context.Consumer>
        {
          context => (
            <Text bold spaced>{context.user.email}</Text>
          )
        }
      </Context.Consumer>
    </Row>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

ChangeEmail.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

export default withModal(ChangeEmail)
