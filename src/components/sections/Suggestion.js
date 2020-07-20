import React from "react"

const Suggestion = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <p className="u-margin-bottom-small">
          Mua đồ từ Mỹ thật đơn giản phải không nào! <br></br>Bạn hãy inbox
          Talaria để trải nghiệm ngay nhé
        </p>
        <button
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

export default Suggestion
