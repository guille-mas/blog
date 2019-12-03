import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./blog-page.scss"
import Post from "../components/blog/post"

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Helmet>
      <body className="blog" />
    </Helmet>

    <Post 
      title="7 Habits of highly effective development teams" 
      date="Dec 2019"
    />

    <Post
      title="Devops from a developer perspective"
      date="Dec 2019"
    />

    <Post
      title="Clean, portable development environments using Docker and Docker Compose"
      date="Dec 2019"
    />

    <Post
      title="Agile, stable deployments with Git Flow"
      date="Dec 2019"
    />

    <Post
      title="Automating the deployment of a static website to AWS S3 with Terraform"
      date="Dec 2019"
    />

    <Post
      title="Javascript refactoring tips - RequireJS"
      date="Dec 2019"
    />

    <Post
      title="An introduction to RxJs"
      date="Dec 2019"
    />

    <Post
      title="PHP refactoring tips - Generators"
      date="Dec 2019"
    />

    <Post
      title="Clean code and code docummentation are critical communication channels"
      date="Dec 2019"
    />

    <Post
      title="Optimize your code for humans first"
      date="Dec 2019"
    />

  </Layout>
)

export default IndexPage
