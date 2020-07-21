import React from "react"
import { Link } from "gatsby"

const Suggestion = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <p className="u-margin-bottom-small">
          Mua đồ từ Mỹ thật đơn giản phải không nào! <br></br>Bạn hãy inbox
          Talaria để trải nghiệm ngay nhé
        </p>
        <Link to="/#lien-he" className="btn btn--secondary">
          Liên hệ ngay
        </Link>
      </div>
    </section>
  )
}

export default Suggestion
