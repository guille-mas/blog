import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./projects-page.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Helmet>
      <body className="projects" />
    </Helmet>
  </Layout>
)

export default IndexPage
