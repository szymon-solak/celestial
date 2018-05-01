import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import ListContainer from './listContainer'
import ListItem from './listItem'
import Title from '../title'

const List = (props) => {
  const title = (props.title)
    ? <Title>{props.title}</Title>
    : null

  return (
    <Fragment>
      { title }
      <ListContainer>
        {props.children}
      </ListContainer>
    </Fragment>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
}

export {
  List,
  ListItem
}
