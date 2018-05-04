import React, { Fragment } from 'react'

import Text from '../../../components/text'
import {
  Select,
  Option
} from '../../../components/form'

import { saveTheme } from '../../../services/storage'

import { Context } from '../../../context'

const SelectTheme = () => (
  <Fragment>
    <Text>Select theme:</Text>
      <Context.Consumer>
        {
          context =>
            <Select
              onChange={(evt) => {
                context.changeTheme(evt.target.value)
                saveTheme(evt.target.value)
              }}
              value={context.themeName}
            >
            {
              Object.keys(context.themes).map((themeName, idx) => (
                <Option
                  key={idx}
                  value={themeName}
                >
                  {themeName}
                </Option>
              ))
            }
            </Select>
        }
      </Context.Consumer>
  </Fragment>
)

export default SelectTheme
