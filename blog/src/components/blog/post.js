import React from "react"
import Avatar from "../avatar"
import { Link } from "gatsby"
import "prismjs/themes/prism-tomorrow.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./post.scss"

class Post extends React.Component {
  render() {
    let aside_tech_stack_section;
    let intro_section;
    let aside_avatar_section;
    let aside_section;

    if(this.props.tools) {
      aside_tech_stack_section = (
        <aside className="tech-stack">
          {this.props.tools.split(" ").map((tool, idx) => <span key={idx}>{tool}</span>)}
        </aside>
      );
    }
    
    if(this.props.intro) {
      intro_section = (
        <section className="intro">
          <p>{this.props.intro}</p>
        </section>
      );
    }

    if(intro_section) {
      aside_section = (
        <aside>
          {aside_tech_stack_section || ""}
        </aside>
      );
    } else {
      aside_section = ""
    }


    return (
      <article className="blog-post">
        <header>
          <h3>
            <Link to={this.props.slug}>{this.props.title}</Link>
          </h3>
          <time>{this.props.date}</time>
          {intro_section || ""}
          {aside_section}
        </header>
        {this.props.body && <MDXRenderer className="body">{this.props.body}</MDXRenderer>}
      </article>
    )
  }
}

export default Post
