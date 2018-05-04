import React, { Fragment } from 'react'

import Text from '../../../components/text'
import {
  Form,
  Select,
  Option,
  Submit
} from '../../../components/form'

import { Context } from '../../../context'

const SelectTheme = () => (
  <Fragment>
    <Text>Select theme:</Text>
    <Form row>
      <Context.Consumer>
        {
          context =>
            <Select onChange={evt => context.changeTheme(evt.target.value)}>
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
      <Submit value='Save'/>
    </Form>
  </Fragment>
)

export default SelectTheme
