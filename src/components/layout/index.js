/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import "../../styles/main.scss"

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        showNav={showNav}
        onToggle={() => setShowNav(showNav => !showNav)}
        onHeaderClick={() => setShowNav(false)}
      />

      <main onClick={() => setShowNav(false)}>{children}</main>
      <Footer onClick={() => setShowNav(false)} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
