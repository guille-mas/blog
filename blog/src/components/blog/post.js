import React from "react"
import Avatar from "../avatar"
import { Link } from "gatsby"
import "prismjs/themes/prism-tomorrow.css"
import { MDXRenderer } from "gatsby-plugin-mdx"
import "./post.scss"

class Post extends React.Component {
  render() {
    let tech_stack_section;
    let intro_section;
    let avatar_section;

    if(this.props.tools) {
      tech_stack_section = (
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

    if(!this.props.body) {
      avatar_section = (
        <>
        <Avatar></Avatar>
        <address>Guillermo Maschwitz</address>
        <time>{this.props.date}</time>
        </>
      );
    }

    return (
      <article className="blog-post">
        <header>
          <h3>
            <Link to={this.props.slug}>{this.props.title}</Link>
          </h3>
          <aside>
            {avatar_section || ""}
            {tech_stack_section || ""}
          </aside>
        </header>
        {intro_section || ""}
        {this.props.body && <MDXRenderer className="body">{this.props.body}</MDXRenderer>}
      </article>
    )
  }
}

export default Post
