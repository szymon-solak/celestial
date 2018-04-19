import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Section = styled.section`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} .3s linear forwards;
`

export default Section
