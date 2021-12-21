import RSSParser from 'rss-parser'

const BLOG_URI = 'https://80days.in/feed.xml'
const DEV_TO_URI = 'https://dev.to/api/articles?username=mtimofiiv'
const rss = new RSSParser()

const getBlogPosts = async (req, res) => {
  const rss80days = await rss.parseURL(BLOG_URI)
  let rssDevto = await fetch(DEV_TO_URI)
  rssDevto = await rssDevto.json()

  let posts = []

  for (const post of [ ...rss80days.items, ...rssDevto ]) {
    posts.push({
      title: post.title,
      uri: post.link || post.canonical_url,
      summary: post.summary || post.description,
      posted_at: new Date(post.pubDate || post.published_timestamp),
      source: post.link ? '80 Days' : 'dev.to'
    })
  }

  posts = posts.sort((a, b) => b.posted_at - a.posted_at)

  return res.json(posts)
}

export default getBlogPosts
