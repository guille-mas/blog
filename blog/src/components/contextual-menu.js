import React from "react"
import { Link } from "gatsby"
import "./contextual-menu.scss"

/**
 * @todo must be dynamic per route. Static by now as a poc
 */
const ContextualMenu = () => (
  <nav id="contextual-menu">
    <Link to="/" title="Home page">Home</Link>
    <Link to="/about/index.html" title="About Guillermo Maschwitz and his website">About</Link>
    <Link to="/blog/index.html" title="Guillermo Maschwitz's technical blog">Blog</Link>
  </nav>
)

export default ContextualMenu
