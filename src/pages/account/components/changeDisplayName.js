import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Text from '../../../components/text'
import Button from '../../../components/button'
import Row from '../../../components/row'
import FormModal from './formModal'

import withModal from '../helpers/withModal'

import { Context } from '../../../context'

import firebase from '../../../services/firebase'

const ChangeDisplayName = ({
  show,
  showModal,
  handleModalClose,
}) => (
  <Fragment>
    <FormModal
      show={show}
      title='Change display name'
      onClose={handleModalClose}
      label='New display name:'
      handleSubmit={async (name) => {
        const user = firebase.auth().currentUser
        return user.updateProfile({
          displayName: name,
        })
      }}
    />
    <Row wrap={'true'}>
      <Text>Display name:</Text>
      <Context.Consumer>
        {
          context => (
            <Text bold spaced>{context.user.displayName}</Text>
          )
        }
      </Context.Consumer>
    </Row>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

ChangeDisplayName.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

export default withModal(ChangeDisplayName)
