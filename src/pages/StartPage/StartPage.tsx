import React from "react";
import H1 from "../../components/H1";
import H3 from "../../components/H3";
import Line from "../../components/Line/Line";
import { StyledStartPage } from "./StartPage.css";

const StartPage = () => {
  return (
    <StyledStartPage>
      {/* <Line /> */}
      <H1>Kacper Kuczewski</H1>
      <H3>Junior Fullstack Developer</H3>
    </StyledStartPage>
  );
};

export default StartPage;
