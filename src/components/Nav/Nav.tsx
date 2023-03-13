import React from "react";
import { GitBranch, Heart, Mail } from "react-feather";
import SpanPadding from "../SpanPadding";

import { StyledA, StyledNav, StyledNavLink } from "./Nav.css";

const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink>
        <StyledA href="#about">
          <Heart />
          <SpanPadding>About</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA href="#projects">
          <GitBranch />
          <SpanPadding>Projects</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA href="#contact">
          <Mail /> <SpanPadding>Contact</SpanPadding>
        </StyledA>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
