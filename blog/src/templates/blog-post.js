import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Post from "../components/blog/post"
import "../pages/blog-page.scss"
import "../components/blog/post.scss"
//import the Prism package
import Prism from "prismjs"

export default ({ data }) => {
  
  useEffect(() => {
    Prism.highlightAll()
  }, []);

  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog post" />
      </Helmet>

      <Post
        title={data.markdownRemark.frontmatter.title}
        date={data.markdownRemark.frontmatter.date}
        slug={data.markdownRemark.frontmatter.slug}
        body={data.markdownRemark.html}
      />
    </Layout>
  )
}


export const query = graphql`
         query($slug: String!) {
           markdownRemark(frontmatter: { slug: { eq: $slug } }) {
             html
             frontmatter {
               title
               date
               slug
             }
           }
         }
       `
