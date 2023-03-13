import React from "react";
import styled from "styled-components";

const StyledLineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 20%;
  height: 100%;
  opacity: 0.6;
`;

const StyledLine = styled.div`
  width: 20px;
  height: 100%;
  background-color: #cc9507;
`;

const StyledCircle = styled.div`
  width: 70px;
  height: 70px;
  background-color: #cc9507;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const Line = () => (
  <StyledLineWrapper>
    <StyledLine />
    <StyledCircle />
  </StyledLineWrapper>
);

export default Line;
