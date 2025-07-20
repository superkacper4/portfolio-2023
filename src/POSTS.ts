import helloWorldPost from "./POSTS/helloWorld.md";

export type PostType = {
  content: string;
  date: string;
  title: string;
  tableOfContent: string[];
  url: string;
};

export const POSTS: PostType[] = [
  {
    content: helloWorldPost,
    date: "19.01.2025",
    title: "Hello World!",
    tableOfContent: ["test-blog-post"],
    url: "hello-world",
  },
];
