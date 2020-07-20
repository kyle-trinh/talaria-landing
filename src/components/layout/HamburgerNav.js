import React from "react"

const HamburgerNav = ({ onToggle }) => {
  return (
    <div className="nav-burger" onClick={onToggle}>
      <div className="nav-burger__line"></div>
    </div>
  )
}

export default HamburgerNav
