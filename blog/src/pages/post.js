import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from "react-helmet"
import "./blog-page.scss"
import Post from "../components/blog/post"
import { graphql } from "gatsby"

const PostPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <Helmet>
        <body className="blog" />
      </Helmet>
      {data.allFile.edges.map(({ node }, index) => (
        <Post
          key={index}
          title={node.name}
          date={node.modifiedTime}
          body={node.childMarkdownRemark.html}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
         query BlogPost {
           allFile(filter: { relativeDirectory: { eq: "blog" } }) {
             edges {
               node {
                 name
                 modifiedTime(fromNow: true)
                 childMarkdownRemark {
                   frontmatter {
                     title
                     date
                   }
                   html
                 }
               }
             }
           }
         }
       `

export default PostPage
