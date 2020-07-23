import React from "react"
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "@icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { socialMedia, email, phoneNumber, siteUrl } from "@config"

const Footer = () => {
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
    <footer>
      <div className="container">
        <div className="footer__social-links">
          {socialMedia.map((social, i) => (
            <a
              key={i}
              href={social.url}
              className="footer__social-link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={social.name}
            >
              &nbsp;
              {social.name === "Facebook" ? (
                <FacebookIcon />
              ) : (
                <InstagramIcon />
              )}
            </a>
          ))}
          <a href={`mailto: ${email}`} className="footer__social-link">
            <MailIcon />
          </a>
        </div>
        <div className="footer__logo-box">
          <a href={siteUrl}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              className="footer__logo"
              alt="Talaria logo"
            />
          </a>
        </div>
        <div className="footer__phone">
          <PhoneIcon />
          <p>{phoneNumber}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
