import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./blog-page.scss"
import Post from "../components/blog/post"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog" />
      </Helmet>

      {data.allFile.edges.map(({ node }, index) => (
        <Post
          key={index}
          title={node.childMarkdownRemark.frontmatter.title}
          date={node.childMarkdownRemark.frontmatter.date}
          slug={node.childMarkdownRemark.frontmatter.slug}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
         query BlogPosts {
           allFile(
             filter: {
               relativeDirectory: { eq: "blog" }
               childMarkdownRemark: { frontmatter: { publish: { eq: true } } }
             }
           ) {
             edges {
               node {
                 childMarkdownRemark {
                   frontmatter {
                     title
                     date
                     slug
                   }
                 }
               }
             }
           }
         }
       `

export default IndexPage
