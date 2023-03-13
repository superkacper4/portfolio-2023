import React from "react";

import { StyledA, StyledNav, StyledNavLink } from "./Nav.css";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink>
        <StyledA href="#about">About</StyledA>
      </StyledNavLink>
      <StyledNavLink>Projects</StyledNavLink>
      <StyledNavLink>Contact</StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
