import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import Photo from "../../images/gatsby-astronaut.png"
import Img from "gatsby-image"

const Testimonials = ({ data }) => {
  const slider = useRef(null)
  useEffect(() => {
    new Swiper(".swiper-container", {
      // Optional parameters

      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    })
  }, [])
  return (
    <section className="section-testimonials" id="phan-hoi">
      <h2 className="heading-secondary u-center-text u-margin-bottom-small">
        Khách hàng nói gì
      </h2>
      <p className="section__subtext u-center-text u-margin-bottom-medium">
        Cùng xem khách hàng của Talaria nói gì nhé!
      </p>
      <div className="container">
        <div className="swiper-outer-container">
          <div className="swiper-container" ref={slider}>
            <div className="swiper-wrapper">
              {data.map((customer, i) => {
                const { name, content, avatar } = customer.node.frontmatter

                return (
                  <div className="swiper-slide" key={i}>
                    <div className="swiper-content">
                      <div className="swiper-slide__comment">
                        <p className="quotation-mark"> &#34;</p>
                        <p>{content}</p>
                        <h5 className="customer-name">{name}</h5>
                      </div>
                      <figure className="swiper-slide__user-photo">
                        <Img
                          fluid={avatar.childImageSharp.fluid}
                          className="swiper-slide__image"
                          alt={name}
                        />
                      </figure>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="swiper-pagination"></div>

            <div className="swiper-scrollbar"></div>
          </div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
