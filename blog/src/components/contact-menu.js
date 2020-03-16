import React from "react"
import "./contact-menu.scss"

const ContactMenu = () => (
  <section className="wrapper contact">
    <nav id="contact">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        title="Guillermo Maschwitz's LinkedIn Profile"
        href="https://www.linkedin.com/in/guillermomas/"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        title="Guillermo Maschwitz's Github Profile"
        href="https://github.com/guille-mas"
      >
        Github
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="stackoverflow"
        title="Guillermo Maschwitz's StackOverflow Profile"
        href="https://stackoverflow.com/users/1607360/guillermo-maschwitz"
      >
        StackOverflow
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="dockerhub"
        title="Guillermo Maschwitz's Docker Images"
        href="https://hub.docker.com/u/guillermomaschwitz"
      >
        DockerHub
      </a>
    </nav>
  </section>
)

export default ContactMenu
