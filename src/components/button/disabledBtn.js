import styled from 'styled-components'

import Base from './base'

const DisabledBtn = styled(Base)`
  background: grey;
  color: ${props => props.theme.fontFocus};
`

export default DisabledBtn