import styled from "styled-components";
import img from "../../img/background.png";

const StyledAboutPage = styled.section`
  min-height: 70vh;
  min-width: 100vw;
  background-image: url(${img});
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  position: relative;
`;

export { StyledAboutPage };
