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
    let aside_section;
    let title_section;

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

    if(this.props.title) {
      title_section = (
        <h3>
          <Link to={this.props.slug} name={this.props.title}>{this.props.title}</Link>
        </h3>
      );
    }

    return (
      <article className="blog-post">
        <header>
          {title_section || ""}
          <time>{this.props.date}</time>
          {intro_section || ""}
          <aside>
            {aside_tech_stack_section || ""}
          </aside>
        </header>
        {this.props.body && <MDXRenderer className="body">{this.props.body}</MDXRenderer>}
      </article>
    )
  }
}

export default Post
