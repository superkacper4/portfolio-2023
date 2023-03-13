import styled from "styled-components";

const StyledStartPage = styled.section`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(-45deg, #3b1c94, #281758, #6c195a);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export { StyledStartPage };
