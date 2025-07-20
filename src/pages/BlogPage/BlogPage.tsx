import BlogTile from "../../components/BlogTile/BlogTile";
import H1 from "../../components/H1";
import { POSTS } from "../../POSTS";
import { StyledWrapper } from "./BlogPage.css";

const BlogPage = () => {
  return (
    <StyledWrapper>
      <H1>BLOG 💪</H1>
      {POSTS.map((post) => (
        <BlogTile {...post} />
      ))}
    </StyledWrapper>
  );
};

export default BlogPage;
