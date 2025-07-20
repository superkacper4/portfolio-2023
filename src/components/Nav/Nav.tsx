import { GitBranch, Heart, Mail, Edit2 } from "react-feather";
import SpanPadding from "../SpanPadding";
import { StyledA, StyledNav, StyledNavLink } from "./Nav.css";
const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink>
        <StyledA to="/#about">
          <Heart /> <SpanPadding>About</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/#projects">
          <GitBranch /> <SpanPadding>Projects</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/#contact">
          <Mail /> <SpanPadding>Contact</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/blog">
          <Edit2 /> <SpanPadding>BLOG</SpanPadding>
        </StyledA>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
