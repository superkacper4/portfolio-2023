import helloWorldPost from "./POSTS/helloWorld.md";
import developerVsProductMindsetPost from "./POSTS/developerVsProductMindset.md";

export type PostType = {
  content: string;
  date: string;
  title: string;
  url: string;
};

export const POSTS: PostType[] = [
  {
    content: developerVsProductMindsetPost,
    date: "11.11.2025",
    title: "Developers VS Product Sense",
    url: "developer-vs-product-mindset",
  },
  {
    content: helloWorldPost,
    date: "19.01.2025",
    title: "Hello World!",
    url: "hello-world",
  },
];
