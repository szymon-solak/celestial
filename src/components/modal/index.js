import React from 'react'

import Backdrop from './backdrop'
import ModalContainer from './modalContainer'
import Header from './header'
import CloseBtn from './closeBtn'
import Title from '../title'

const Modal = (props) => {
  if (!props.show) return null

  const closeIfBackdropClicked = (evt) => {
    if (evt.currentTarget === evt.target) {
      props.onClose()
    }
  }

  return (
    <Backdrop onClick={closeIfBackdropClicked}>
      <ModalContainer>
        <Header>
          <Title>{props.title}</Title>
          <CloseBtn onClick={props.onClose} />
        </Header>
        {props.children}
      </ModalContainer>
    </Backdrop>
  )
}

export default Modal
