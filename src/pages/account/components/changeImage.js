import React, { Fragment } from 'react'

import Image from '../../../components/image'
import Button from '../../../components/button'
import FormModal from './formModal'
import withModal from '../helpers/withModal'

import { Context } from '../../../context'

import firebase from '../../../services/firebase'

const ChangeImage = ({
  show,
  showModal,
  handleModalClose
}) => (
  <Fragment>
    <FormModal
      show={show}
      title='Change profile image'
      onClose={handleModalClose}
      label='New image URL:'
      handleSubmit={async (photoURL) => {
        const user = firebase.auth().currentUser
        return user.updateProfile({
          photoURL
        })
      }}
    />
    <Context.Consumer>
      {
        (context) => (
          <Image
            icon={'true'}
            src={context.user.photoURL}
          />
        )
      }
    </Context.Consumer>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

export default withModal(ChangeImage)
