import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, .2);
`

export default Backdrop
