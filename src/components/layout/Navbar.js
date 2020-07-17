import React from "react"
import { navLinks } from "@config"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          {navLinks.map(link => (
            <li className="navbar__item">
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
