import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColor};
`

export default Container
