import styled from "styled-components";
import A from "../A";

const StyledNav = styled.nav`
  width: 100vw;
  height: 50px;
  position: fixed;
  z-index: 10;
  color: white;
  font-size: 20px;
  display: flex;
  background-color: rgba(59, 28, 148, 0.7);
`;

const StyledNavLink = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #abbcff;
  transition: 0.2s background-color;

  &:nth-child(2) {
    border-left: 1px solid #abbcff;
    border-right: 1px solid #abbcff;
  }

  &:hover {
    background-color: #3b1c94;
  }
`;

const StyledA = styled(A)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledNav, StyledNavLink, StyledA };
