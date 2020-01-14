import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Post from "../components/blog/post"
import "./blog-post.scss"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog post animate" />
      </Helmet>
      
      <section className="body">
        <Post
          title={data.mdx.frontmatter.title}
          intro={data.mdx.frontmatter.intro}
          date={data.mdx.frontmatter.date}
          tools={data.mdx.frontmatter.tools}
          slug={data.mdx.frontmatter.slug}
          body={data.mdx.body}
        />
      </section>
    </Layout>
  )
}


export const query = graphql`
         query($slug: String!) {
           mdx(frontmatter: { slug: { eq: $slug } }) {
             body
             frontmatter {
               slug
               title
               intro
               date
               tools
             }
           }
         }
       `
