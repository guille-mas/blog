import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Post from "../components/blog/post"
import "./blog-post.scss"

export default ({ data }) => {

  const bodyClass = data.mdx.frontmatter.blog ?  "blog post animate" : "";

  const golangPackage = typeof data.mdx.frontmatter.golangPackage == "string";

  return (
    <Layout>
      {golangPackage
        ? <meta name="go-import" content={`guille.cloud/${data.mdx.frontmatter.golangPackage} git https://github.com/guille-mas/kubernetes-custom-resource`} />
        : null
      }
      <SEO title="Blog" />
      <Helmet>
        <body className={bodyClass} />
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
               blog
               golangPackage
             }
           }
         }
       `
