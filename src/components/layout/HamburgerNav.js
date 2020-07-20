import React from "react"

const HamburgerNav = ({ onToggle, showNav }) => {
  return (
    <button
      className={`nav-burger ${showNav && "show"}`}
      onClick={e => {
        e.stopPropagation()
        onToggle()
      }}
    >
      <div className="nav-burger__line"></div>
    </button>
  )
}

export default HamburgerNav
