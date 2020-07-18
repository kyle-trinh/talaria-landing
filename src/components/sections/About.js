import React from "react"

const About = ({ data }) => {
  const { frontmatter } = data[0].node
  console.log(frontmatter)
  return (
    <section className="section-about">
      <div className="container">
        <h2 className="heading-secondary u-center-text u-margin-bottom-small">
          {frontmatter.title}
        </h2>
        <p className="section__subtext u-center-text u-margin-bottom-medium">
          {frontmatter.subTitle}
        </p>
        <div className="messages">
          {frontmatter.messages.map(message => {
            const parts = message.split("$$")
            return (
              <div
                className={`messages__item messages__item--${parts[1].trim()}`}
              >
                {parts[0]}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
