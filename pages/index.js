import { useState, useEffect } from 'react'
import Layout from '@components/Layout'
import Projects from '@components/Projects'
import Hero from '@components/Hero'
import Footer from '@components/Footer'
import Blogroll from '@components/Blogroll'

import projects from '@data/projects'

const Home = () => {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const getXhr = async () => {
      const blogRequest = await fetch('/api/blog')
      const blogPosts = await blogRequest.json()

      setPosts(blogPosts.filter((post, i) => i < 3))
    }

    getXhr()
  }, [])

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <Blogroll posts={posts} />
      <Footer />
    </Layout>
  )
}

export default Home
