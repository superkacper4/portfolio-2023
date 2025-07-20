import { useParams } from "@tanstack/react-router";
import { POSTS } from "../../POSTS";
import {
  StyledBlogPost,
  StyledBlogPostTitle,
  StyledBlogPostWrapper,
  StyledGoBack,
} from "./BlogPostPage.css";
import H3 from "../../components/H3";
import { marked } from "marked";
import { ArrowLeft } from "react-feather";
import { gfmHeadingId } from "marked-gfm-heading-id";

marked.use(gfmHeadingId());

const BlogPostPage = () => {
  const { postId } = useParams({ from: "/blog/$postId" });
  const post = POSTS.find((x) => x.url === postId);

  if (!post) return null;
  const postContent = marked(post.content);

  return (
    <StyledBlogPostWrapper>
      <StyledGoBack to="/blog">
        <ArrowLeft /> Go back
      </StyledGoBack>
      <StyledBlogPostTitle>
        <H3>{post.title}</H3>
        <span>{post.date}</span>
      </StyledBlogPostTitle>
      <StyledBlogPost
        dangerouslySetInnerHTML={{
          __html:
            typeof postContent !== "string"
              ? "Something went wrong"
              : postContent,
        }}
      />
    </StyledBlogPostWrapper>
  );
};
export default BlogPostPage;
