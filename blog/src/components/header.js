import React from "react"
import ContextualMenu from "./contextual-menu"
import IamSection from "./iam-section"

const Header = ({ siteTitle }) => (
  <section className="wrapper">
    <header id="header">
      <IamSection></IamSection>
      <ContextualMenu></ContextualMenu>
    </header>
  </section>
)

export default Header
