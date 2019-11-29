import React from "react"
import { Link } from "gatsby"
import "./contextual-menu.scss"

/**
 * @todo must be dynamic per route. Static by now as a poc
 */
const ContextualMenu = () => (
  <nav id="contextual-menu">
    <Link to="/">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blog">Blog</Link>
  </nav>
)

export default ContextualMenu
