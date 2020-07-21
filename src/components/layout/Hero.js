import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import axios from "axios"

const Hero = ({ onClick }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({ submitting: false, status: { ok, msg } })
    if (ok) {
      form.reset()
    }
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "cover.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const handleOnSubmit = async e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    try {
      await axios({
        method: "post",
        url: "https://getform.io/f/d018221a-4559-41fa-8d50-6af66f27aad4",
        data: new FormData(form),
      })

      handleServerResponse(true, "Form submission success. Thanks!", form)
      setTimeout(() => {
        setServerState({ ...serverState, status: null })
      }, 3000)
    } catch (err) {
      handleServerResponse(false, e.response.data.error, form)
      setTimeout(() => {
        setServerState({ ...serverState, status: null })
      }, 3000)
    }
  }

  return (
    <BackgroundImage
      Tag="div"
      className="hero"
      fluid={data.file.childImageSharp.fluid}
      role="img"
      onClick={onClick}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="hero__text">
          <h1 className="heading-primary">
            <span className="heading-primary--big">Order từ Mỹ </span>
            <br></br>Rẻ không phải nghĩ
          </h1>
        </div>

        <div className="hero__form" id="lien-he">
          <form className="form" onSubmit={handleOnSubmit}>
            <p className="form__title u-margin-bottom-small">Đăng ký tư vấn</p>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Họ tên"
                id="name"
                name="name"
                autoComplete="false"
                required
              ></input>
              <label htmlFor="name" className="form__label">
                Họ tên
              </label>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Số điện thoại"
                id="phone"
                name="phone"
              ></input>
              <label htmlFor="phone" className="form__label">
                Số điện thoại
              </label>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Link Facebook"
                id="facebook"
                name="facebook"
              ></input>
              <label htmlFor="facebook" className="form__label">
                Link Facebook
              </label>
            </div>

            <div className="form__group">
              <input
                type="email"
                className="form__input"
                placeholder="Email"
                id="email"
                name="email"
              ></input>
              <label htmlFor="email" className="form__label">
                Email
              </label>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Thành phố sinh sống"
                id="city"
                name="city"
              ></input>
              <label htmlFor="city" className="form__label">
                Thành phố sinh sống
              </label>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Link đồ muốn mua"
                id="item"
                name="item"
              ></input>
              <label htmlFor="item" className="form__label">
                Link đồ muốn mua
              </label>
            </div>

            {serverState.status && (
              <div className="form__msg-div u-margin-bottom-small">
                <p className="form__msg u-center-text">
                  {serverState.status.msg}
                </p>
              </div>
            )}

            <div className="form__group">
              <button className="btn btn--primary">Gửi</button>
            </div>
          </form>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
