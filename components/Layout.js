import Head from 'next/head'

const Layout = ({ children, title = '@fiiv' }) => (
  <main>
    <Head>
      <title>{title}</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:url" content="https://fiiv.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="I'm a traveller, aspiring writer, father, indie maker, runner, cook, reader of theory, software developer, amateur electricist, open web enthusiast, and a bunch of other stuff." />
      <meta property="og:image" content="https://fiiv.io/ogimage.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    {children}

    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" /></noscript>
  </main>
)

export default Layout
