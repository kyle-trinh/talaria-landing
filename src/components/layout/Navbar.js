import React from "react"
import { navLinks } from "@config"

const Navbar = ({ showNav, setShowNav }) => {
  return (
    <nav
      className={`navbar ${showNav && "show"}`}
      onClick={e => e.stopPropagation()}
    >
      <div className="container">
        <ul className="navbar__list">
          {navLinks.map((link, i) => (
            <li
              className="navbar__item"
              key={i}
              onClick={() => setShowNav(false)}
            >
              <a
                href={link.url}
                className={`navbar__link ${
                  link.url === "/#lien-he" ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
