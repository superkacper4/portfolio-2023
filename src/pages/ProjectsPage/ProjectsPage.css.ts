import styled from "styled-components";
import img from "../../img/background.png";

const StyledProjectsPage = styled.section`
  width: 100vw;
  /* background-color: #1c112b; */
  background: linear-gradient(0deg, #6c195a, #1c112b);

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  position: relative;
  padding-bottom: 50px;
`;

const StyledProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 1000px; */
`;

export { StyledProjectsPage, StyledProjectsWrapper };
