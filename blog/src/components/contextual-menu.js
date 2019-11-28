import React from "react"
import { Link } from "gatsby"

/**
 * @todo must be dynamic per route. Static by now as a poc
 */
const ContextualMenu = () => (
  <nav>
    <Link to="/">Projects</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default ContextualMenu
