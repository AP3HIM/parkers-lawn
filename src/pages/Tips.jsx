import React from 'react'
import { Link } from 'react-router-dom'
import { tips } from '../data/tips'
import '../css/Tips.css'

const Tips = () => {
  return (
    <div className="tips-page">
      <section className="tips-hero">
        <div className="container">
          <p className="hero__eyebrow">From the Pros</p>
          <h1>Tips &amp; Tricks</h1>
          <p>Straight from Parker's crew: Practical advice to help you maintain a beautiful yard between service visits.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="tips-page__grid">
            {tips.map((tip) => (
              <Link to={`/tips/${tip.slug}`} className="tips-card" key={tip.slug}>
                <div className="tips-card__meta">
                  <span className="tips-card__category">{tip.category}</span>
                  <span className="tips-card__read-time">{tip.readTime}</span>
                </div>
                <h2>{tip.title}</h2>
                <p>{tip.excerpt}</p>
                <div className="tips-card__footer">
                  <span className="tips-card__date">{tip.date}</span>
                  <span className="tips-card__cta">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tips