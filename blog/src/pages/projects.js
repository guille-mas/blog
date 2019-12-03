import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./projects-page.scss"

class ProjectsListPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Projects" />
        <Helmet>
          <body className="projects" />
        </Helmet>
        <article className="project">
          <header>
            <div className="date">12-3-2019</div>
            <h3>Project Title</h3>
          </header>
          <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.<br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <aside className="tech-stack">
            <span>docker</span>
            <span>docker-compose</span>
            <span>php7</span>
            <span>typescript</span>
          </aside>
        </article>
      </Layout>
    )
  }
}

export default ProjectsListPage
