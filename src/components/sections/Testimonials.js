import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import Photo from "../../images/gatsby-astronaut.png"

const Testimonials = () => {
  const slider = useRef(null)
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
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
    <section className="section-testimonials">
      <h2 className="heading-secondary u-center-text u-margin-bottom-small">
        Khách hàng nói gì
      </h2>
      <p className="section__subtext u-center-text u-margin-bottom-medium">
        Cùng xem khách hàng của Talaria nói gì nhé!
      </p>
      <div className="container">
        <div className="swiper-outer-container">
          <div className="swiper-container swiper-2" ref={slider}>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="swiper-content">
                  <div className="swiper-slide__comment">
                    <p className="quotation-mark"> &#34;</p>
                    <p>
                      As always my nails are amazing. You are such great
                      professionals. I don't know how I ever got by before you
                      came in to my life! You girls are the best! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Odio, id!
                    </p>
                    <h5 className="customer-name">Mia Nguyen</h5>
                  </div>
                  <figure className="swiper-slide__user-photo">
                    <img src={Photo} alt="" className="swiper-slide__image" />
                  </figure>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="swiper-content">
                  <div className="swiper-slide__comment">
                    <p className="quotation-mark"> &#34;</p>
                    <p>
                      As always my nails are amazing. You are such great
                      professionals. I don't know how I ever got by before you
                      came in to my life! You girls are the best! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Odio, id!
                    </p>
                    <h5 className="customer-name">Mia Nguyen</h5>
                  </div>
                  <figure className="swiper-slide__user-photo">
                    <img src={Photo} alt="" className="swiper-slide__image" />
                  </figure>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="swiper-content">
                  <div className="swiper-slide__comment">
                    <p className="quotation-mark"> &#34;</p>
                    <p>
                      As always my nails are amazing. You are such great
                      professionals. I don't know how I ever got by before you
                      came in to my life! You girls are the best! Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Odio, id!
                    </p>
                    <h5 className="customer-name">Mia Nguyen</h5>
                  </div>{" "}
                  <figure className="swiper-slide__user-photo">
                    <img src={Photo} alt="" className="swiper-slide__image" />
                  </figure>
                </div>
              </div>
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
