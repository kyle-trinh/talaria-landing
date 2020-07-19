import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import {
  About,
  CTA,
  Order,
  Suggestion,
  Testimonials,
} from "../components/sections"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <About data={data.about.edges} aboutBody={data.aboutBody.edges} />
      <CTA />
      <Order data={data.order.edges} steps={data.steps.edges} />
      <Suggestion />
      <Testimonials />
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

    aboutBody: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-body/" } }
    ) {
      edges {
        node {
          frontmatter {
            icon
            content
          }
        }
      }
    }

    order: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/order/" } }
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

    steps: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/steps/" } }
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            text
            title
            image {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
