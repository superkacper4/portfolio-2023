import React from "react";

import { StyledA, StyledNav, StyledNavLink } from "./Nav.css";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink>
        <StyledA href="#about">About</StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA href="#projects">Projects</StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA href="#contact">Contact</StyledA>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
