import React, { Fragment } from 'react'

import Text from '../../../components/text'
import { Select, Option } from '../../../components/select'

import { saveTheme } from '../../../services/storage'

import { Context } from '../../../context'

const SelectTheme = () => (
  <Fragment>
    <Text spaced>Select theme:</Text>
    <Context.Consumer>
      {
        context => (
          <Select
            default={context.themeName}
            onChange={(newTheme) => {
              context.changeTheme(newTheme)
              saveTheme(newTheme)
            }}
          >
            {Object.keys(context.themes).map((themeName, idx) => (
              <Option key={idx} value={themeName}>
                {themeName}
              </Option>
            ))}
          </Select>
        )
      }
    </Context.Consumer>
  </Fragment>
)

export default SelectTheme
