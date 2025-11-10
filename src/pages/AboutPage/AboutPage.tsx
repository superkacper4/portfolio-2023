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
          I've been immersed in the world of web development for seven years,
          steadily expanding my skills. My journey started with front-end, but
          over time I went deeper into back-end and I am currently focusing
          mostly on developing myself in this area. Over the past three years,
          I've delved into the exciting realm of full-stack development, which
          allows me to build my own projects in the most efficient way.
        </P>
      </AnimationWrapper>
    </StyledAboutPage>
  );
};

export default AboutPage;
