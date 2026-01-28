**Table of contents**

- [Introduction](#introduction)
- [The bad table](#the-bad-table)
- [A little bit of context](#a-little-bit-of-context)
- [Contrast](#contrast)
- [Summary](#summary)

## Introduction

Six months ago, we made a small, reasonable decision: we decided not to create a new database table.

Two entities in our system “looked similar enough”, so we put them into the same one.

Today, this single decision has created more technical debt than the 10-year-old system I work with every day.

This is the story of how that happened.

## The bad table

Initially, our app had a simple concept of adding opinions to it. The schema looked more or less like this:

```prisma
model Opinion {
  id         String    @id @default(cuid())
  building   Building? @relation(fields: [buildingId], references: [id])
  buildingId String?
  pricePerSquareMeter Int
  rating  Int?
  message String?
  area    Float
  opinionDate DateTime @default(now())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

As you can see, there are already properties that are clearly meant to be shared between apartments and opinions, like `area`, `buildingId`, or `pricePerSquareMeter`.

All was fine until we realized we lacked a few properties that are essential for the apartment entity. Since opinions and apartments could now also be added by registered users, we added a new relation for it. It was still great — we still had full coverage.

So we kept going. After a while, we realized that we lacked such a basic field as `numberOfRooms`.

So we added that. Then we added `floor`. Then `height`. It's not like they can't exist in the opinion entity. It's just something that wouldn't make any sense from the business perspective.

After a while, we ended up with many `?.` across the whole app, as half of our table had optional properties.

From the data perspective, it was such a mess that we ended up with an `isApartment` flag inside the `Opinion` table. 🙃

What was also very bad, from the code perspective, was that it was not that clear when an `Opinion` was actually an apartment and when it was just an opinion.

This created huge tech debt, but the sad part is that for a very long time it seemed like this decision was reasonable. But as time passed, it became more and more clear that this was a bad decision.

## A little bit of context

The app I am referring to is a Next.js monolith app. It's only around 6 months old, but it's a ready product, with even external integrations with payments. It's not a super complex app, but it's definitely not a trivial one either.

The idea was to create a place for people to exchange their opinions and prices related to the real estate market, so it would help with decision-making. Something like Glassdoor, but for real estate. That's why we already had the Opinion table when we decided to add the ads part.

## Contrast

Recently, we were working on a new feature in a 10-year-old app - vouchers. We started, as usual, with the monolith app, so everything was packed into the app's database.

But then we realized that sooner or later this would require external integrations handled by our Marketplace (a set of microservices). So instead of continuing, we stopped. We took a step back and moved the whole logic to a dedicated service.

It was more work. It delayed us. But now we have a single source of truth.

## What was learnt

I realized that tech debt is not something that just appears out of nowhere. It's something that we create every single day.

It's not about being lazy, not having time to refactor, or choosing some exotic stack. It's about making decisions that seem reasonable, but then snowball into something much worse.

Every single `TODO: Will refactor it later.`, or "These two look similar enough, let's make them share logic" (and you end up with _many_ ifs).

## Summary

I just want to encourage you to think more about technical debt and realize that it's something you (and I) bring into the project every single day.

It's not just something left behind by people who no longer work there. It's on me. It's on you.

One day, you may find that the 💩 code you are trying to debug was written by you.

Stay strong and be positive! 💪

_To comment, you can use the [Issues tab](https://github.com/superkacper4/portfolio-2023/issues) on my project, or comment in the thread (if this post was posted on Reddit, X, or anywhere)._
