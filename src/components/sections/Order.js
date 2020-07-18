import React from "react"
import Img from "gatsby-image"

const Order = ({ data, steps }) => {
  const { frontmatter } = data[0].node
  console.log(steps)
  return (
    <section className="section-order">
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

        <div className="steps">
          {steps.map((step, i) => {
            const { text, title, image } = step.node.frontmatter
            return (
              <div className="steps-item" key={i}>
                <Img
                  fluid={image.childImageSharp.fluid}
                  className="steps-item__img"
                />
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Order
