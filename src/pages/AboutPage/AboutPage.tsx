import React from "react";
import Corner from "../../components/Corner/Corner";
import H2 from "../../components/H2";
import P from "../../components/P";
import { isMobile } from "../../helpers/functions";
import { StyledAboutPage } from "./AboutPage.css";

const AboutPage = () => {
  return (
    <StyledAboutPage id="about">
      <H2>About</H2>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </P>
    </StyledAboutPage>
  );
};

export default AboutPage;
