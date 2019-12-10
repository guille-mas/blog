import React from "react"
import "./project.scss"

class Project extends React.Component {
    render() {
        const tech_stack = (this.props.tools || []).map( (tool, index) => {
            return (
                <span key={index}>{tool}</span>
            );
        });

        return (
            <article className="project">
                <header>
                    <div className="date">{this.props.date}</div>
                    <h3>{this.props.title}</h3>
                </header>
                {this.props.body}
                <aside className="tech-stack">{tech_stack}</aside>
            </article>
        )
    }
}

export default Project
