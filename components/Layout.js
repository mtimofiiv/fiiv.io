import Head from 'next/head'

const Layout = ({ children, title = '@fiiv' }) => (
  <main>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </main>
)

export default Layout
