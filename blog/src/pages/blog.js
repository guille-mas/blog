import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./blog-page.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Helmet>
      <body className="blog" />
    </Helmet>
  </Layout>
)

export default IndexPage
