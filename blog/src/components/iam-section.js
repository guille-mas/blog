import React from "react"
import Avatar from "./avatar"
import { Link } from "gatsby"
import "./iam-section.scss"

const IamSection = () => (
  <section id="iam">
    <div>
      <Link to="/">
        <Avatar></Avatar>
      </Link>
    </div>
    <div>
      <h1>Guillermo Maschwitz</h1>
      <h2>
        Tech Lead working at{" "}
        <a href="https://gun.io" target="_blank" rel="noopener noreferrer">
          Gun.io
        </a>
      </h2>
    </div>
  </section>
)

export default IamSection
