import styled from 'styled-components'

import Base from './base'

const SuccessBtn = styled(Base)`
  position: relative;

  background: ${props => props.theme.success};
  color: ${props => props.theme.fontFocus};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: ${props => props.theme.success};
  }

  &::after {
    content: '\\2713';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default SuccessBtn
