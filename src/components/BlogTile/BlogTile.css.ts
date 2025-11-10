import { Link } from "@tanstack/react-router";
import styled from "styled-components";

const StyledBlog = styled(Link)`
  align-items: center;
  background-color: #1c112b;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 2rem;
  margin-top: 0;
  max-width: 800px;
  width: 100%;
  text-decoration: none;
  transition: 0.2s background-color;

  &:nth-of-type(1) {
    margin-top: 0;
  }

  &:hover {
    background-color: #6c195a;
  }

  & > p {
    color: white;
    padding: 0;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export { StyledBlog };
