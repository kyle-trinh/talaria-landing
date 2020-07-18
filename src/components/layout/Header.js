import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./HeaderTop"
import Navbar from "./Navbar"
import Hero from "./Hero"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderTop />
    <Navbar />
    <Hero />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
