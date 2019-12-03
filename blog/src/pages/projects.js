import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helmet from 'react-helmet'
import "./projects-page.scss"
import Project from "../components/project/project"

class ProjectsListPage extends React.Component {
  render() {
    const dummy_text = (
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
    );

    return (
      <Layout>
        <SEO title="Projects" />
        <Helmet>
          <body className="projects" />
        </Helmet>

        <Project 
          date="12-3-2019" 
          title="This blog" 
          body={dummy_text} 
          tools={['docker', 'docker-compose', 'react', 'terraform', 'aws']} 
        />

        <Project
          date="10-20-2019"
          title="Super Dupper Project"
          body={dummy_text}
          tools={['php7', 'typescript', 'docker']}
        />

        <Project
          date="8-15-2019"
          title="A Project I will never forget"
          body={dummy_text}
          tools={['terraform', 'aws-ecs', 'aws-lambda', 'node']}
        />

        <Project
          date="12-3-2019"
          title="Web Platform refactor"
          body={dummy_text}
          tools={['php7', 'javascript', 'requirejs', 'webpack']}
        />
      </Layout>
    )
  }
}

export default ProjectsListPage
