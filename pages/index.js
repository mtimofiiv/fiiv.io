import Layout from '@components/Layout'
import Projects from '@components/Projects'
import Hero from '@components/Hero'
import Footer from '@components/Footer'

import projects from '@data/projects'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <Footer />
    </Layout>
  )
}

export default Home
