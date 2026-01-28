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

  @media (max-width: 600px) {
    padding: 12px;
    padding-top: 80px;
  }
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

  /* Inline code */
  code {
    background-color: #42305c;
    color: #e6d3ff;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    font-size: 0.9em;
  }

  /* Code blocks */
  pre {
    background-color: #2d1b3d;
    border: 1px solid #42305c;
    border-radius: 8px;
    padding: 16px;
    overflow-x: auto;
    margin: 16px 0;
    position: relative;

    code {
      background: none;
      padding: 0;
      border-radius: 0;
      color: #e6d3ff;
      display: block;
      line-height: 1.5;
    }
  }

  /* Syntax highlighting with CSS (basic) */
  pre code {
    /* Keywords */
    .token.keyword,
    .hljs-keyword {
      color: #cc9507;
      font-weight: bold;
    }

    /* Strings */
    .token.string,
    .hljs-string {
      color: #82b366;
    }

    /* Comments */
    .token.comment,
    .hljs-comment {
      color: #8b6f9b;
      font-style: italic;
    }

    /* Numbers */
    .token.number,
    .hljs-number {
      color: #6ab7ff;
    }

    /* Functions */
    .token.function,
    .hljs-function {
      color: #ffa726;
    }

    /* Variables and properties */
    .token.property,
    .hljs-property {
      color: #9c88ff;
    }

    /* Operators */
    .token.operator,
    .hljs-operator {
      color: #ff6b9d;
    }

    /* Types */
    .token.class-name,
    .hljs-type {
      color: #4fc3f7;
    }
  }

  /* Language label for code blocks */
  pre[class*="language-"]::before {
    content: attr(class);
    position: absolute;
    top: 8px;
    right: 12px;
    font-size: 12px;
    color: #8b6f9b;
    text-transform: uppercase;
    font-family: inherit;
  }

  @media (max-width: 600px) {
    padding: 15px;

    pre {
      padding: 12px;
      font-size: 14px;
    }
  }
`;

const StyledBlogPostTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding-bottom: 36px;
  gap: 8px;

  @media (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const StyledGoBack = styled(Link)`
  align-self: flex-start;
  align-items: center;
  color: white;
  display: flex;
  gap: 4px;
  text-decoration: none;
`;

const StyledGoBackWrapper = styled.div`
  padding-bottom: 8px;
  max-width: 800px;
  width: 100%;
`;

export {
  StyledBlogPost,
  StyledBlogPostTitle,
  StyledBlogPostWrapper,
  StyledGoBack,
  StyledGoBackWrapper,
};
