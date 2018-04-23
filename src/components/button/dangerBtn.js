import styled from 'styled-components'

import Base from './base'

const DangerBtn = styled(Base)`
  background: ${props => props.theme.error};
  color: ${props => props.theme.fontFocus};
`

export default DangerBtn
