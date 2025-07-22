import { GitBranch, Heart, Mail, Edit2 } from "react-feather";
import SpanPadding from "../SpanPadding";
import { StyledA, StyledNav, StyledNavLink } from "./Nav.css";
const Nav = () => {
  return (
    <StyledNav>
      <StyledNavLink>
        <StyledA to="/portfolio-2023/#about">
          <Heart /> <SpanPadding>About</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/portfolio-2023/#projects">
          <GitBranch /> <SpanPadding>Projects</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/portfolio-2023/#contact">
          <Mail /> <SpanPadding>Contact</SpanPadding>
        </StyledA>
      </StyledNavLink>
      <StyledNavLink>
        <StyledA to="/portfolio-2023/blog">
          <Edit2 /> <SpanPadding>BLOG</SpanPadding>
        </StyledA>
      </StyledNavLink>
    </StyledNav>
  );
};

export default Nav;
