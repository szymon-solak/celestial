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
  width: 90%;
  max-width: 760px;
  min-height: 200px;
  padding: 0 1em 1em 1em;

  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: .1em;

  animation: ${popUp} .2s ease-in-out forwards;
`

export default ModalContainer
