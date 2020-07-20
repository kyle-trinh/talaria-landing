import React from "react"

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <p className="u-margin-bottom-small">
          Với 5 chữ CÓ này thì còn chờ đợi gì mà chưa inbox Talaria để order món
          đồ yêu thích ngay nào bạn ơiii 💖💖💖
        </p>
        <button
          href="/#"
          onClick={() => {
            const hero = document.querySelector(".hero")
            const form = document.querySelector("#lien-he")

            window.scrollTo(0, hero.offsetTop + form.offsetTop)
          }}
          className="btn btn--secondary"
        >
          Liên hệ ngay
        </button>
      </div>
    </section>
  )
}

export default CTA
