**Table of content**

- [Test blog post](#test-blog-post)
- [Assumptions](#assumptions)
- [So what was the idea behind this project](#so-what-was-the-idea-behind-this-project)
- [Less interesting details](#less-interesting-details)
- [Summary](#summary)

## Test blog post

This project lasted too long and it's such a mess. **BUT IT IS**. Date stands for the moment when I decided to start this *blog project*. Since it's now here an actual posts may start appearing.

Anyway, since I am already spending time on that, let's start with short journey developing this one.

## Assumptions

I decided it's not worth to start yet another project, setup all of that, as I already have portfolio. Also it's good place to show your extra work, besided your paid one. But afterall from technical perspective, I am not sure if it was good idea, as it's old one, I used here some old stuff I wouldn't use now and I really wanted to avoid refactoring all of that, just to have place to write down some of my thoughts. So saying that, I ended up with **a lot of** red underlines over my project 🫣. I can live with that though.

## So what was the idea behind this project?

Initial idea was to write posts as HTML code, so to use eg. `h1`, `p` tags etc. Then I realised it would be so cool, to have posts looks nice in GitHub as well. So instead of HTML, I decided to switch to .md. Issue with that was, that I couldn't import .md files' content into my app. So instead of nice text, I got something like `/whatever/whatever/`, which wasn't my desired effect 😜.

Then I found out about `marked` [link](https://www.npmjs.com/package/marked) package. It's perfect for converting markdown to html, but it doesn't help with the import issue. Solution was to use `raw-loader` [link](https://www.npmjs.com/package/raw-loader), `react-app-rewired` [link](https://www.npmjs.com/package/react-app-rewired) and `customize-cra` [link](https://www.npmjs.com/package/customize-cra). All of those combined required adding config file:
```ts
const { override, addWebpackModuleRule } = require('customize-cra');
module.exports = override(
  addWebpackModuleRule({
    test: /\.md$/,
    use: 'raw-loader',
  })
);
```

and last but not least, changing package.json:

```ts
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```

After all of those, finally markdown file import gave me actual content of it, instead of *some* path.

## Less interesting details

Obviously I had to add some styling to my blog posts. I am not super happy with how it looks yet, but evantually I will get there. I strongly belive there is no point in forever development with that. The sad fact is that almost nobody will read those blog posts here, so there is no need to spend forever on making them perfect and delay deploy forever.

## Summary

It was quite interesting adventure, definitelly took to long, but let's be honest, everybody puts current projects "on hold", as we got yet better idea 😝. It was my case too, but finally I found moment to close this one. This post is more to warm up, actual post will come soon!

Stay strong and be postivie! 💪

*To comment you can use [issue tab](https://github.com/superkacper4/portfolio-2023/issues) on my project, or comment in the thread (if this post was posted on reddit, x, or wherever)*
