import React from "react"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Testimonials = ({ data }) => {
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
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            navigation
            loop={true}
          >
            {data.map((customer, i) => {
              const { name, content, avatar } = customer.node.frontmatter

              return (
                <SwiperSlide key={i}>
                  <div className="swiper-content">
                    <div className="swiper-slide__comment">
                      <p className="quotation-mark"> &#34;</p>
                      <p>{content}</p>
                      <h4 className="customer-name">{name}</h4>
                    </div>
                    <figure className="swiper-slide__user-photo">
                      <Img
                        fluid={avatar.childImageSharp.fluid}
                        className="swiper-slide__image"
                        alt={name}
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/* <div className="swiper-container" ref={slider}>
            <div className="swiper-wrapper">
              {data.map((customer, i) => {
                const { name, content, avatar } = customer.node.frontmatter

                return (
                  <div className="swiper-slide" key={i}>
                    <div className="swiper-content">
                      <div className="swiper-slide__comment">
                        <p className="quotation-mark"> &#34;</p>
                        <p>{content}</p>
                        <h4 className="customer-name">{name}</h4>
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
          <div className="swiper-button-next"></div> */}
          {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
