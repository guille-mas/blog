import React from "react"
import ContactMenu from "./contact-menu"
import ContextualMenu from "./contextual-menu"
import IamSection from "./iam-section"

const Header = ({ siteTitle }) => (
  <header>
    <ContactMenu></ContactMenu>
    <IamSection></IamSection>
    <ContextualMenu></ContextualMenu>
  </header>
)

export default Header
