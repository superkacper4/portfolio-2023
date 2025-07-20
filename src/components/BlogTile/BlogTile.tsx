import { PostType } from "../../POSTS";
import H3 from "../H3";
import P from "../P";
import { StyledBlog } from "./BlogTile.css";

type BlogTileProps = PostType;

const BlogTile = ({ date, title, url }: BlogTileProps) => {
  return (
    <StyledBlog to={url}>
      <H3>{title}</H3>
      <P>{date}</P>
    </StyledBlog>
  );
};

export default BlogTile;
