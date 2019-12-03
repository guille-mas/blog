import React from "react"
import "./contact-menu.scss"

const ContactMenu = () => (
  <section className="wrapper contact">
    <nav id="contact">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
        href="https://www.linkedin.com/in/guillermomas/"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="github"
        href="https://github.com/guille-mas"
      >
        Github
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="stackoverflow"
        href="https://stackoverflow.com/users/1607360/guillermo-maschwitz"
      >
        StackOverflow
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="dockerhub"
        href="https://hub.docker.com/u/guillermomaschwitz"
      >
        DockerHub
      </a>
    </nav>
  </section>
)

export default ContactMenu
