import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./HeaderTop"

const Header = ({ siteTitle }) => (
  <header>
    <HeaderTop />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
