import React from "react"
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "@icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { socialMedia, email, phoneNumber, siteUrl } from "@config"

const HeaderTop = ({ onClick }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top__social-links">
          {socialMedia.map((social, i) => (
            <a key={i} href={social.url} className="header-top__social-link">
              {social.name === "Facebook" ? (
                <FacebookIcon />
              ) : (
                <InstagramIcon />
              )}
            </a>
          ))}
          <a href={`mailto: ${email}`} className="header-top__social-link">
            <MailIcon />
          </a>
        </div>
        <div className="header-top__logo-box">
          <a href={siteUrl}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              className="header-top__logo"
              alt="Talaria logo"
            />
          </a>
        </div>
        <div className="header-top__phone">
          <PhoneIcon />
          <p>{phoneNumber}</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
