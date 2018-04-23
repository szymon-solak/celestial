import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;

  border-top: 2px solid ${props => props.theme.border};
  border-bottom: 2px solid ${props => props.theme.border};
`

export default ListContainer
