import React from 'react'

import Base from './base'
import DangerBtn from './dangerBtn';
import SuccessBtn from './successBtn';

const Button = (props) => {
  if (props.danger) {
    return (
      <DangerBtn {...props}>
        {props.children}
      </DangerBtn>
    )
  }

  if (props.success) {
    return (
      <SuccessBtn {...props}>
        {props.children}
      </SuccessBtn>
    )
  }

  return (
    <Base {...props}>
      {props.children}
    </Base>
  )
}

export default Button
