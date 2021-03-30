import React from 'react'

import PostCards from '../../components/PostCards/PostCards'
import Layout from '../../components/shared/Layout/Layout'

import './Home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home