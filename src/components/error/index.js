import styled, { keyframes } from 'styled-components'

const shake = keyframes`
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-1%);
  }

  75% {
    transform: translateX(1%);
  }

  100% {
    transform: translateX(0);
  }
`

const ErrorBox = styled.div`
  position: relative;

  width: 100%;
  padding: .6em;
  margin-bottom: 1em;

  background: ${props => props.theme.error};
  color: ${props => props.theme.fontFocus};

  animation: ${shake} .3s ease-in-out .1s 2;
`

export default ErrorBox
