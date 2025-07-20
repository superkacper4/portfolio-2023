import { Link } from "@tanstack/react-router";
import styled from "styled-components";

const StyledBlogPostWrapper = styled.section`
  align-items: center;
  background: linear-gradient(0deg, #6c195a, #1c112b);
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 100px;
  width: 100%;
  min-height: 100vh;
`;

const StyledBlogPost = styled.div`
  background-color: #1c112b;
  border-radius: 0.5rem;
  width: 100%;
  padding: 30px;
  max-width: 800px;

  a {
    color: #cc9507;
  }

  h2 {
    scroll-margin: 50px;
  }

  code {
    background-color: #42305c;
    border-radius: 5px;
    color: #b6acc2;
    padding: 2px;
  }
`;

const StyledBlogPostTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding-bottom: 36px;
`;

const StyledGoBack = styled(Link)`
  align-self: flex-start;
  align-items: center;
  color: white;
  display: flex;
  gap: 4px;
  padding: 16px;
  text-decoration: none;
`;

export {
  StyledBlogPostWrapper,
  StyledBlogPost,
  StyledBlogPostTitle,
  StyledGoBack,
};
