import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./HeaderTop"
import Navbar from "./Navbar"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderTop />
    <Navbar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
