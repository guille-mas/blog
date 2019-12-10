import React from "react"
import "./post.scss"
import Avatar from "../avatar"
import { Link } from "gatsby";

class Post extends React.Component {

    createMarkup(markup) {
        return {__html: markup};
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
              <small>{this.props.date}</small>
            </aside>
            <div
              dangerouslySetInnerHTML={this.createMarkup(this.props.body)}
            ></div>
          </article>
        )
    }
}

export default Post
