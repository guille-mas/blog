import React from "react"
import { Link } from "gatsby"
import "./contextual-menu.scss"

/**
 * @todo must be dynamic per route. Static by now as a poc
 */
const ContextualMenu = () => (
  <nav id="contextual-menu">
    <Link to="/index.html">About</Link>
    <Link to="/projects/index.html">Projects</Link>
    <Link to="/blog/index.html">Blog</Link>
  </nav>
)

export default ContextualMenu
