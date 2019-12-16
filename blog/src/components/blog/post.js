import React, { useEffect } from "react"
import "./post.scss"
import Avatar from "../avatar"
import { Link } from "gatsby";
import "prismjs/themes/prism-tomorrow.css";

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
        </header>
        <aside>
          <Avatar />
          <address>Guillermo Maschwitz</address>
          <time>{this.props.date}</time>
        </aside>
        <div
          className="body"
          dangerouslySetInnerHTML={this.createMarkup(this.props.body)}
        ></div>
      </article>
    )
  }
}

export default Post
