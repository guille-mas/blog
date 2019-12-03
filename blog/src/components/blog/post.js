import React from "react"
import "./post.scss"
import Avatar from "../avatar"

class Post extends React.Component {
    render() {
        return (
            <article className="blog-post">
                <header>
                    <h3>{this.props.title}</h3>
                </header>
                <aside>
                    <Avatar /> 
                    <address>Guillermo Maschwitz</address>
                    <small>{this.props.date}</small>
                </aside>
                {this.props.body}
            </article>
        );
    }
}

export default Post
