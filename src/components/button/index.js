import React from 'react'

import Base from './base'
import DangerBtn from './dangerBtn'
import SuccessBtn from './successBtn'
import DisabledBtn from './disabledBtn'

const Button = (props) => {

  if (props.disabled) {
    return (
      <DisabledBtn {...props}>
        {props.children}
      </DisabledBtn>
    )
  }

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
