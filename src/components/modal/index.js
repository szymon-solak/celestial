import React from 'react'

import Backdrop from './backdrop'
import ModalContainer from './modalContainer'

const Modal = (props) => {
  if (!props.show) return null

  return (
    <Backdrop>
      <ModalContainer>
        {props.children}
      </ModalContainer>
    </Backdrop>
  )
}

export default Modal
