import styled from "styled-components";
import { Link } from "@tanstack/react-router";

const StyledNav = styled.nav`
  width: 100vw;
  height: 50px;
  position: fixed;
  z-index: 10;
  color: white;
  font-size: 20px;
  display: flex;
  background-color: #200145;
`;

const StyledNavLink = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #abbcff;
  border-right: 1px solid #abbcff;
  transition: 0.2s background-color;

  &:nth-last-child() {
    border-right: 0px;
    border-left: 1px solid #abbcff;
  }

  &:hover {
    background-color: #3b1c94;
  }
`;

const StyledA = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  text-decoration: none;

  @media (max-width: 600px) {
    svg {
      display: none;
    }
  }
`;

export { StyledNav, StyledNavLink, StyledA };
