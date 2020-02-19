import React from "react"
import { Link } from "gatsby"
import "./contextual-menu.scss"

/**
 * @todo must be dynamic per route. Static by now as a poc
 */
const ContextualMenu = () => (
  <nav id="contextual-menu">
    <Link to="/">Blog</Link>
    <Link to="/about/index.html">About</Link>
    <Link to="/business/index.html">Services</Link>
  </nav>
)

export default ContextualMenu
