import React from "react"
import {
  AuthenIcon,
  GuaranteeIcon,
  SaleIcon,
  ShippingIcon,
  FeeIcon,
} from "../icons"

const About = ({ data, aboutBody }) => {
  const { frontmatter } = data[0].node
  console.log(aboutBody)

  const renderIcon = name => {
    if (name === "AuthenIcon") return <AuthenIcon />
    else if (name === "GuaranteeIcon") return <GuaranteeIcon />
    else if (name === "SaleIcon") return <SaleIcon />
    else if (name === "ShippingIcon") return <ShippingIcon />
    else if (name === "FeeIcon") return <FeeIcon />
  }
  return (
    <section className="section-about">
      <div className="container">
        <h2 className="heading-secondary u-center-text u-margin-bottom-small">
          {frontmatter.title}
        </h2>
        <p className="section__subtext u-center-text u-margin-bottom-medium">
          {frontmatter.subTitle}
        </p>
        <div className="messages u-margin-bottom-big">
          {frontmatter.messages.map((message, i) => {
            const parts = message.split("$$")
            return (
              <div
                className={`messages__item messages__item--${parts[1].trim()}`}
                key={i}
              >
                {parts[0]}
              </div>
            )
          })}
        </div>

        <div className="promise">
          {aboutBody.map((promise, i) => {
            const content = promise.node.frontmatter

            return (
              <div className="promise__item" key={i}>
                {renderIcon(content.icon)}
                <p className="text-paragraph">{content.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
