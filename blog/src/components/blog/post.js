import React from "react"
import "./post.scss"
import Avatar from "../avatar"
import { Link } from "gatsby";
import Prism from "prismjs"

class Post extends React.Component {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0)
  }

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
