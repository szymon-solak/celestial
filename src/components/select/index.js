import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseBtn from '../button/base'

const SelectElement = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
`

export const Option = BaseBtn.extend`
  flex: 1 0 20em;

  background: ${props => (props.selected
    ? props.theme.focus
    : props.theme.background
  )};
  color: ${props => (props.selected
    ? props.theme.fontFocus
    : props.theme.fontColor
  )};

  transition all .11s linear;
`
export class Select extends Component {
  state = {
    selected: this.props.default || '',
  }

  handleChange = (evt) => {
    this.setState({
      selected: evt.target.value,
    })

    if (this.props.onChange) {
      this.props.onChange(evt.target.value)
    }
  }

  renderChildren = () =>
    React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        onClick: this.handleChange,
        selected: this.state.selected === child.props.value,
      })
    )

  render() {
    return (
      <SelectElement>
        {this.renderChildren()}
      </SelectElement>
    )
  }
}

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  default: PropTypes.string,
  onChange: PropTypes.func,
}
