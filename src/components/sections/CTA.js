import React from "react"
import { Link } from "gatsby"

const CTA = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <p className="u-margin-bottom-small">
          Với 5 chữ CÓ này thì còn chờ đợi gì mà chưa inbox Talaria để order món
          đồ yêu thích ngay nào bạn ơiii{" "}
          <span role="img" aria-label="love">
            💖💖💖
          </span>
        </p>
        <Link to="/#lien-he" className="btn btn--secondary">
          Liên hệ ngay
        </Link>
      </div>
    </section>
  )
}

export default CTA
