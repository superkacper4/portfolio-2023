import styled from "styled-components";
import A from "../A";

const StyledProjectTile = styled.div`
  min-width: 200px;
  max-width: 350px;
  width: 30%;
  min-height: 250px;
  margin: 0.25rem;
  padding: 1rem;
  background-color: rgba(40, 23, 88, 0.7);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  /* align-items: space-between; */
`;

const StyledProjectLink = styled.div`
  width: 100%;
  border-bottom: 1px solid #abbcff;
  color: white;
  transition: 0.2s background-color;

  &:hover {
    background-color: #3b1c94;
  }
`;

const StyledA = styled(A)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledProjectTile, StyledProjectLink, StyledA };
