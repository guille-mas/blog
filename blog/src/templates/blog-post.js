import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Post from "../components/blog/post"
import "../pages/blog-page.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog post animate" />
      </Helmet>

      <Post
        title={data.mdx.frontmatter.title}
        date={data.mdx.frontmatter.date}
        slug={data.mdx.frontmatter.slug}
        body={data.mdx.body}
      />
    </Layout>
  )
}


export const query = graphql`
         query($slug: String!) {
           mdx(frontmatter: { slug: { eq: $slug } }) {
             body
             frontmatter {
               title
               date
               slug
             }
           }
         }
       `
