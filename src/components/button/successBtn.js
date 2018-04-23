import styled from 'styled-components'

import Base from './base'

const SuccessBtn = styled(Base)`
  background: ${props => props.theme.success};
  color: ${props => props.theme.fontFocus};
`

export default SuccessBtn
