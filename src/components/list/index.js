import React, { Fragment } from 'react'

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

export {
  List,
  ListItem
}
