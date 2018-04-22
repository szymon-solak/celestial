import styled, { keyframes } from 'styled-components'

const popUp = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const ModalContainer = styled.div`
  width: 100%;
  max-width: 760px;
  min-height: 120px;

  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.border};

  animation: ${popUp} .3s linear forwards;
`

export default ModalContainer
