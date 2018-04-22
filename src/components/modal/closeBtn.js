import styled from 'styled-components'

const CloseBtn = styled.div`
  position: relative;
  width: 1em;
  height: 1em;

  background: ${props => props.theme.background};

  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: .1em;

    background: ${props => props.theme.fontColor};

    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: .1em;

    background: ${props => props.theme.fontColor};

    transform: translate(-50%, -50%) rotate(135deg);
  }
`

export default CloseBtn
