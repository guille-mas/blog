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
           allFile(filter: { relativeDirectory: { eq: "blog" } }) {
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

/*
<Post
        title="7 Habits of highly effective development teams"
        date="Dec 2019"
      />

      <Post title="Devops from a developer perspective" date="Dec 2019" />

      <Post
        title="Clean, portable development environments using Docker and Docker Compose"
        date="Dec 2019"
      />

      <Post title="Agile, stable deployments with Git Flow" date="Dec 2019" />

      <Post
        title="Automating the deployment of a static website to AWS S3 with Terraform"
        date="Dec 2019"
      />

      <Post title="Javascript refactoring tips - RequireJS" date="Dec 2019" />

      <Post title="An introduction to RxJs" date="Dec 2019" />

      <Post title="PHP refactoring tips - Generators" date="Dec 2019" />

      <Post
        title="Clean code and code docummentation are critical communication channels"
        date="Dec 2019"
      />

      <Post title="Optimize your code for humans first" date="Dec 2019" />
*/

