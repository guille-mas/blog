import React from "react"
import "./post.scss"
import Avatar from "../avatar"
import { Link } from "gatsby";
import "prismjs/themes/prism-tomorrow.css";
import { MDXRenderer } from "gatsby-plugin-mdx"

class Post extends React.Component {

  createMarkup(markup) {
    return { __html: markup }
  }

  render() {
    return (
      <article className="blog-post">
        <header>
          <h3>
            <Link to={this.props.slug}>{this.props.title}</Link>
          </h3>
          <aside>
            <Avatar />
            <address>Guillermo Maschwitz</address>
            <time>{this.props.date}</time>
          </aside>
        </header>
        {this.props.body && <MDXRenderer className="body">{this.props.body}</MDXRenderer>}
      </article>
    )
  }
}

export default Post
