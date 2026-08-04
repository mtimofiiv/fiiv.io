---
title: Everything you've (n)ever wanted to know about favicons
description: What is a favicon, how did it come about and most importantly, how can you make sure you're doing them correctly?
cover_image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/43mhbwvv3f0why6tfffr.png
layout: post
---

A favicon is quite simply an **icon**. The idea behind its inception was for browsers to use them to make a quick, easy to identify visual representation of a website in the browser's UI.

![Favicon as it appears in Firefox](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ydfpdypv6lqmuvirmonk.png)

## A little bit of history

The first favicons were implemented in 1999 by Microsoft in their Internet Explorer browser. Since then, they were widely adopted by almost all browsers, and today it is commonplace to find favicons being displayed all over the browser, such as in bookmarks menus, window and tab headings, address bars, history, etc.

Microsoft's original idea was to load that icon from a specific place relative to a website. If your website's address was `pokemon.com`, Internet Explorer looked for it at `pokemon.com/favicon.ico`.

This original implementation worked alright at first. But at the time, lots of websites were hosted with companies like Geocities, Angelfire and Tripod. They would give your website an address like `tripod.com/my-pokemon-website`. The problem with this was that the browser would always use Tripod's favicon located at `tripod.com/favicon.ico` and not one that the website's author might want to show!

Eventually, the people responsible for standardising HTML on the web, the World Wide Web Consortium (W3C), created a specification for how both browsers and website authors should use these icons. In the HTML of the page, an HTML tag would be included, telling the browser where to find that icon.

But, since the original Internet Explorer needed to work because lots of websites had been using it, browsers began supporting them both.

## The advent of the smartphone (and other use-cases)

A lot of things changed when the smartphone became mainstream. One notable thing that changed for favicons was that people could save websites to their home screen. But the favicon.ico icons up to this point were all too small – sometimes they were as tiny as 16 pixels! These icons were supposed to be shown next to app icons, which are much more high fidelity images – up to 10 times bigger, in fact!

Android and iOS use different icon sizes. Also, Windows began using yet another icon type for displaying websites in its Metro tile display.

## The chaos is real

As a result of all these different specifications, there are now a lot of places to look for favicons. And the different icons you can get will vary depending on which one you request. Some sites will have some but not others!

The list includes:

* `yoursite.com/favicon.ico`
* In the site's HTML code
* In the site's web manifest file

Some sites end up with dozens of different icons. These vary, from the usually tiny favicon.ico to the higher resolution icon used by iOS's home screen feature. Additionally, a lot can go wrong with fetching these.

* There might not be any icons at all.
* The icons are specified but don't exist (return a 404).
* The icons are the wrong size.
* The icons are the wrong format for where you might want to use them.
* The icons are corrupted or broken.
* The icons specified might not have the one you might want to use.
* The web server could be misconfigured (for example, resulting in redirect loops).
* The web server could be slow to respond with the icons or the files specifying the icons.

So, requesting something as simple as a tiny little website icon can be a very complicated task! Clearly there is no one-size-fits-all solution to grab the icons.

## How to make sure your website has all its icons

So all that being said, how do you make sure your website has all the different icons it should have, and they're properly referenced in your HTML markup?

Quite simply, the best way to do this is to use a service that generates the markup and icons for you. The best ones I've found so far are [realfavicongenerator.net](https://realfavicongenerator.net/) and [Website Planet's Favicon Generator](https://www.websiteplanet.com/webtools/favicon-generator). You can upload an icon image, specify some preferences, and it will generate a ZIP file with your icons properly sized and set up, as well as the HTML to insert into your site's `<head>` section.

If you use Webpack, you could also try out the plugin [jantimon/favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin) that will automatically work its magic to give you favicons.

## How to use other sites' favicons on your site

1. You could build your own API or serverless function to fetch a site's favicons. But, I gotta tell you from experience, there's a lot of edge cases and weirdness here.
2. You could always load `domain.com/favicon.ico`, but be prepared for 404s.
3. You could use an existing service. **Shameless plug** – I built [Icon Horse](https://icon.horse) for this purpose, you can use it free (or upgrade for additional features). Other services also exist, like [Favicon Grabber](https://favicongrabber.com/). Some search engines like Google, Bing and DuckDuckGo also have APIs for this, but since they're intended for internal use and are undocumented and unsupported, be prepared that they might not work like you want or they might stop working at any moment.

### Other cool stuff

* **[Iconmap.io](https://iconmap.io/)**: a massive map of favicons from all over the web
* **[realfavicongenerator.net](https://realfavicongenerator.net/)**: the best tool I've found for generating favicons for your website
* **[Website Planet's Favicon Generator](https://www.websiteplanet.com/webtools/favicon-generator)**: another great tool for generating favicons for your site
* **[Icon Horse](https://icon.horse)**: my super cool favicon grabber API
* Let me know if you can think of a link for here and I'll add it
