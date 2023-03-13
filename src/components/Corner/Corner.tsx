import React from "react";
import styled from "styled-components";

const Corner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 30vh 0 0 30vw;
  border-color: transparent transparent transparent #cc9507;
  transform: rotate(0deg);
`;

export default Corner;
