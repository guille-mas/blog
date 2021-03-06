import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import "./error-page.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <Helmet>
      <body className="error" />
    </Helmet>
    <h4>This page doesn&#39;t exist</h4>
  </Layout>
)

export default NotFoundPage
