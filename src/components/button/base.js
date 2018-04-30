import styled, { css, keyframes } from 'styled-components'

const sweep = keyframes`
  0% {
    transform:
      translateX(0)
      scale(1.25);
  }

  20% {
    transform:
      translateX(-500%)
      scale(1);
  }

  50% {
    transform:
      translateX(0)
      scale(1.5);
  }

  70% {
    transform:
      translateX(500%)
      scale(1);
  }

  100% {
    transform:
      translateX(0)
      scale(1.25);
  }
`

const loadingMixin = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: ${props => props.theme.focus};
  }

  &::after {
    content: '';
    position: absolute;

    width: .5em;
    height: .5em;
    top: calc(50% - .25em);
    left: calc(50% - .25em);
    
    background: ${props => props.theme.background};
    border-radius: 50%;

    animation: ${sweep} 2s ease-in-out infinite;
  }
`

const Base = styled.button`
  position: relative;
  padding: 1em;

  border: none;
  background: ${props => props.theme.focus};
  color: ${props => props.theme.fontFocus};

  cursor: pointer;

  opacity: 1;

  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: 0.85;
  }

  ${props => (props.loading ? loadingMixin : null)};
`

export default Base
