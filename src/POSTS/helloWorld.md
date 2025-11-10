**Table of content**

- [Test blog post](#test-blog-post)
- [Assumptions](#assumptions)
- [So what was the idea behind this project](#so-what-was-the-idea-behind-this-project)
- [Less interesting details](#less-interesting-details)
- [Summary](#summary)

## Test blog post

This project lasted too long and it's such a mess. **BUT IT IS**. The date stands for the moment when I decided to start this _blog project_. Since it's now here, actual posts may start appearing.

Anyway, since I am already spending time on that, let's start with a short journey developing this one.

## Assumptions

I decided it's not worth starting yet another project, setting all of that up, as I already have a portfolio. Also, it's a good place to show your extra work besides your paid one. But after all, from a technical perspective, I am not sure if it was a good idea, as it's an old one. I used some old stuff I wouldn't use now, and I really wanted to avoid refactoring all of that just to have a place to write down some of my thoughts. So, saying that, I ended up with **a lot of** red underlines over my project 🫣. I can live with that though.

## So what was the idea behind this project?

The initial idea was to write posts as HTML code, using e.g. `h1`, `p` tags, etc. Then I realised it would be so cool to have posts look nice on GitHub as well. So instead of HTML, I decided to switch to .md. The issue with that was that I couldn't import .md files' content into my app. So instead of nice text, I got something like `/whatever/whatever/`, which wasn't my desired effect 😜.

Then I found out about the `marked` [link](https://www.npmjs.com/package/marked) package. It's perfect for converting markdown to HTML, but it doesn't help with the import issue. The solution was to use `raw-loader` [link](https://www.npmjs.com/package/raw-loader), `react-app-rewired` [link](https://www.npmjs.com/package/react-app-rewired) and `customize-cra` [link](https://www.npmjs.com/package/customize-cra). All of those combined required adding a config file:

```ts
const { override, addWebpackModuleRule } = require("customize-cra");
module.exports = override(
  addWebpackModuleRule({
    test: /\.md$/,
    use: "raw-loader",
  }),
);
```

And last but not least, changing package.json:

```ts
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```

After all of those, finally, the markdown file import gave me the actual content of it instead of some path.

## Less interesting details

Obviously, I had to add some styling to my blog posts. I am not super happy with how it looks yet, but eventually, I will get there. I strongly believe there is no point in developing it forever. The sad fact is that almost nobody will read these blog posts here, so there is no need to spend forever making them perfect and delaying the deploy forever.

## Summary

It was quite an interesting adventure, definitely took too long, but let's be honest, everybody puts current projects "on hold" as we get yet a better idea 😝. It was my case too, but finally, I found a moment to close this one. This post is more of a warm-up; the actual post will come soon!

Stay strong and be positive! 💪

_To comment, you can use the [Issues tab](https://github.com/superkacper4/portfolio-2023/issues) on my project, or comment in the thread (if this post was posted on Reddit, X, or anywhere)._
