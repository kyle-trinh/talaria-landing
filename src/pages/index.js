import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { About } from "../components/sections"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <About data={data.about.edges} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-header/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subTitle
            messages
          }
        }
      }
    }
  }
`
