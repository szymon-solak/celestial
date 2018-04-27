import styled from 'styled-components'

import Base from './base'

const DisabledBtn = styled(Base)`
  background: grey;
  color: ${props => props.theme.fontFocus};

  cursor: not-allowed;
`

export default DisabledBtn