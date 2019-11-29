import React from "react"
import ContextualMenu from "./contextual-menu"
import IamSection from "./iam-section"
import "./header.scss"


const Header = ({ siteTitle }) => (
  <section className="wrapper">
    <header id="header">
      <div className="iam-container">
        <IamSection></IamSection>
      </div>
      <ContextualMenu></ContextualMenu>
    </header>
  </section>
)

export default Header
