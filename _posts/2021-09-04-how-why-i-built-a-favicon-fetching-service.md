---
layout: post
title: How & why I built a favicon fetching service
description: There's a surprising amount of pain to get that tiny little icon.
---

A few days ago, I launched [Icon Horse](https://icon.horse), which is a simple, free API to quickly get the favicon of any website. The launch itself went really well, and I had a lot of fun building it.

But inside the seemingly simple but glamorous life of favicons, there is a lot of complexity. I thought I'd share some of how it works with you all, and some of the hoops I had to hop to build Icon Horse.

## What is a favicon, really?

The year was 1999. Britney Spears and Eminem were at the top of the charts, the world was introduced to Napster for the first time, and the "browser war" was heating up with Microsoft releasing Internet Explorer 5.

One of IE5's new features was the favicon, or a small icon which was displayed in the "Favourites" menus/bars next to the title of the site someone bookmarked. Things were simple back then, and if the favicon existed, it would be loaded from the site's root like so:

```
https://mysite.com/favicon.ico
```

Since then, a number of new circumstances have come up requiring new types of icons – one example is the advent of the smart phone, which allowed people to save a website shortcut on their home screen. But since favicons tended to be low resolution, a number of diverging standards came about and added these on both Android and iOS.

Now while technically a *shortcut icon*, they are usually lumped in with favicons in general internet terminology and also during the process to create them.

Today, there are three main places to look for icons:

 1. `https://mysite.com/favicon.ico`
 2. The HTML of the site in the `<head>`
 3. A separate Web App Manifest file which is specified in the `<head>`

## So what's the problem?

I'm currently working on a tool called [Meeting Canary](https://meetingcanary.app), from which a note-taking interface is displayed for a given calendar meeting. Many meetings have links to relevant places, such as video conferencing apps (especially since the COVID-19 situation has moved many people to remote work).

I decided it would be nice to render a small icon next to the links, as a way to tease the content to my users:

![A meeting invite often has a link](https://pbs.twimg.com/media/E8pFHL8VIAAsUvH?format=jpg&name=large)

After hunting for a good way to fetch icons for a given link, I found one that was a JSON API endpoint, but I wasn't very satisfied with this solution – I did **not** want to complicate my life by using it, since I still needed to write code to figure out the *best* icon to display from the list I got back.

Also, I did not find a single service that provided **fallbacks**, or an icon that would be shown if the site is unreachable or if it had no icons at all.

After all, [Gravatar](https://gravatar.com) does this very well for email addresses, and it was strange that no one had done this with favicons yet! So I got to work.

## It was really simple to make, right?

When it comes to standards, the web is pure chaos. When building a product to fetch favicons, you should expect no mercy.

![The web is a hive of scum and villainy](https://4.bp.blogspot.com/-wv1V-55MoaQ/Uc8rNIqugvI/AAAAAAAAaHg/D0wqb-Fn4cc/w1200-h630-p-nu/1012122_592028560863220_1994359073_n.jpg)

Some sites have no icons at all. Some sites have only a few of the icons from the spec. Some sites use strange sizes. Some sites don't even bother to tell you the size (in pixels) of the icons.

Some sites have completely broken DNS or server issues (like infinite redirect loops). Some send confusing or broken headers. Some sites serve invalid HTML or JSON. Some sites have `404 Not Found` errors on their icons. Some sites used weird caching schemes. Some don't specify a MIME type or a file extension so you have to parse the actual image to know what you're dealing with.

The list of difficulties goes on – for example one prominent clothing retailer's icon is simply not loadable because they have a nasty bug in their site's redirects and headers meaning you cannot simply `redirect: 'follow'` your way to the HTML page, but must chain one request after the other manually.

But I persevered through all those.

I knew there was going to be even more edge cases I hadn't considered in the future, so it was very important to build in functionality for fallback images. I never wanted to serve a broken image or a timeout.

I also had to make some decisions. Since my service was making icons available to all who wanted them, there was no telling the different use cases they would be serving. So I made the assumption that the best icon to serve would be the most high fidelity image. Also, for some use cases (such as React Native), SVG format icons would not work out of the box, and needed something like [react-native-svg](https://github.com/react-native-svg/react-native-svg) to get them to load, so I stuck to raster formats only (for the first version at least, I plan to open up SVGs as well in the future via a query parameter).

And finally, pulling all this content is time intensive. Consider that to serve an icon, one needs to:

 1. Load `https://asite.com`'s HTML site
 2. Parse the HTML and do a query lookup to get relevant icons and the manifest file
 3. Load the manifest file and parse it
 4. Check for the existence of the `https://asite.com/favicon.ico` icon
 5. Merge all these icons together in a list and sort them based on a *best* to *worst* criteria, while also making sure the icons themselves are reachable (and don't `404 Not Found`)
 6. If all this fails, generate a JPEG file on the fly as a fallback
 7. Serve the icon to the user

So when dealing with a slow server, it's possible that loading that icon could take quite a long time. To help with that, Icon Horse must cache the resulting list of icons and the resulting chosen icon.

I wanted to keep the functionality super simple, so when someone queried my API to get an icon:

```
https://icon.horse/icon/dev.to
```

I ended up with just the icon:

![dev.to icon](https://icon.horse/icon/dev.to)

## Putting it all together

From the very beginning, I knew I wanted to use a serverless approach to this service. The landing page is built out of Next.js and the service itself sits in a lambda function hosted on Amazon.

After struggling a little bit with getting the environment set up (it had to have image processing capability as well as a few other things), I managed to get it working and running properly.

And there you have it. I launched on [ProductHunt](https://www.producthunt.com/posts/icon-horse) (among other places) and was surprised by the overwhelming positive reception – I got almost 200 upvotes and almost 1000 unique visitors. What surprised me the most is how a favicon fetcher service I thought would be niche and developer only was actually really well understood by all kinds of people.

I learned a lot about the weird world of favicons and solved my own need, but above all had a lot of fun doing it.

Thanks for reading.
