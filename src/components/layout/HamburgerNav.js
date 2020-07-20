import React from "react"

const HamburgerNav = ({ onToggle, showNav }) => {
  return (
    <div className={`nav-burger ${showNav && "show"}`} onClick={onToggle}>
      <div className="nav-burger__line"></div>
    </div>
  )
}

export default HamburgerNav
