import helloWorldPost from "./POSTS/helloWorld.md";
import developerVsProductMindsetPost from "./POSTS/developerVsProductMindset.md";
// @ts-expect-error -- ok
import developerVsProductMindsetPost from "./POSTS/developerVsProductMindset.md";
import technicalDebtEverydayPost from "./POSTS/technicalDebtEveryday.md";

export type PostType = {
  content: string;
  date: string;
  title: string;
  url: string;
};

export const POSTS: PostType[] = [
  {
    content: technicalDebtEverydayPost,
    date: "28.01.2026",
    title:
      "How we created more tech debt in 6 months than in a 10-year-old system",
    url: "technical-debt-everyday",
  },
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
