import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import isUrl from 'is-url'

import Image from '../../../components/image'
import Button from '../../../components/button'
import FormModal from './formModal'
import withModal from '../helpers/withModal'

import { Context } from '../../../context'

import firebase from '../../../services/firebase'

const defaultAvatarURL = 'default_avatar.png'

const ChangeImage = ({
  show,
  showModal,
  handleModalClose,
}) => (
  <Fragment>
    <FormModal
      show={show}
      title='Change profile image'
      onClose={handleModalClose}
      label='New image URL:'
      handleSubmit={async (photoURL) => {
        const user = firebase.auth().currentUser

        if (!isUrl(photoURL)) {
          throw new Error('Please provide a valid URL')
        }

        return user.updateProfile({
          photoURL,
        })
      }}
    />
    <Context.Consumer>
      {
        context => (
          <Image
            icon={'true'}
            src={context.user.photoURL || defaultAvatarURL}
          />
        )
      }
    </Context.Consumer>
    <Button onClick={showModal}>Change</Button>
  </Fragment>
)

ChangeImage.propTypes = {
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired,
  handleModalClose: PropTypes.func.isRequired,
}

export default withModal(ChangeImage)
