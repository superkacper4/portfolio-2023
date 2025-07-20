import React from "react";
import AnimationWrapper from "../../components/AnimationWrapper";
import H2 from "../../components/H2";
import P from "../../components/P";
import { StyledAboutPage } from "./AboutPage.css";

const AboutPage = () => {
  return (
    <StyledAboutPage id="about">
      <H2>About</H2>
      <AnimationWrapper>
        <P>
          I am interested in front-end development for six years and I am
          getting better and better since then. I started with simple HTML, CSS
          and JavaScript websites, but now my favorite stack is React with
          TypeScript. I have experience with back-end technologies. For past six
          months I also started creating fullstack apps. I have engineer degree
          from February 2023, when I graduated.
        </P>
      </AnimationWrapper>
    </StyledAboutPage>
  );
};

export default AboutPage;
