import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./HeaderTop"
import Navbar from "./Navbar"
import Hero from "./Hero"
import HamburgerNav from "./HamburgerNav"

const Header = ({
  siteTitle,
  showNav,
  onToggle,
  onHeaderClick,
  setShowNav,
}) => (
  <header>
    <HamburgerNav onToggle={onToggle} showNav={showNav} />
    <HeaderTop onClick={onHeaderClick} />
    <Navbar showNav={showNav} setShowNav={setShowNav} />
    <Hero onClick={onHeaderClick} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
