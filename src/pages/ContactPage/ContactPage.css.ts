import styled from "styled-components";
import img from "../../img/background.png";

const StyledContactPage = styled.section`
  /* background-color: #1c112b; */
  background-color: #6c195a;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
  padding: 30px;
`;

const StyledLinksWrapper = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

export { StyledContactPage, StyledLinksWrapper };
