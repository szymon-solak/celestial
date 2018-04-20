import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';

    width: 2em;
    height: 2em;

    border-radius: 50%;

    border-left: 4px solid ${props => props.theme.border};
    border-top: 4px solid ${props => props.theme.border};
    border-right: 4px solid grey;
    border-bottom: 4px solid grey;

    animation: ${spin} 1.4s linear infinite;
  }
`

export default Spinner
