import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./about-page.scss"
import Helmet from 'react-helmet'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Helmet>
      <body className="about" />
    </Helmet>
    <article>
      <h3>About Me</h3>
      <p>
      I am a human oriented full stack developer, inspired by devops principles. 
      <br/>
      I love to help remote teams and organizations improve their streams of value through toughtful planning,
      design, and implementation of high quality software, refactor of legacy codebases, and automatization of cloud
      infrastructure.
      I love to work with great teams to build products that people love. 
      <br/>
      I am skilled on every level of the tech stack of a web application; from infrastructure as code, through backend and frontend.
      I love to learn about industry best practices, processes, and also from my fellow coworkers and supervisors.
      <br/>
      To avoid burn out I like to run by the coast a couple miles, biking, or taking a walk with my wife.
      </p>
      <p>
      I am also the proud parent of a wonderful 3 year old kid.
      <br />
      We are very excited, expecting another child that should born on March 2020.
      </p>
    </article>
  </Layout>
)

export default AboutPage
