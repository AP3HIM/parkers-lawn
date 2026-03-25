import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { tips } from '../data/tips'
import '../css/TipDetail.css'

const renderBody = (text) => {
  return text.trim().split('\n').map((line, i) => {
    if (line.startsWith('**') && line.endsWith('**')) {
      return <h3 key={i}>{line.replace(/\*\*/g, '')}</h3>
    }
    const parts = line.split(/\*\*(.*?)\*\*/g)
    if (parts.length > 1) {
      return (
        <p key={i}>
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        </p>
      )
    }
    if (line.startsWith('- ')) {
      return <li key={i}>{line.slice(2)}</li>
    }
    if (line.trim() === '') return null
    return <p key={i}>{line}</p>
  })
}

const TipDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const tip = tips.find(t => t.slug === slug)
  const others = tips.filter(t => t.slug !== slug)

  if (!tip) return (
    <div className="container" style={{ paddingTop: '160px', textAlign: 'center' }}>
      <h2>Article not found</h2>
      <Link to="/tips" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
        Back to Tips
      </Link>
    </div>
  )

  return (
    <div className="tip-detail">
      <section className="tip-detail__hero">
        <div className="container">
          <Link to="/tips" className="tip-detail__back">← All Tips</Link>
          <span className="tips-card__category">{tip.category}</span>
          <h1>{tip.title}</h1>
          <div className="tip-detail__meta">
            <span>{tip.readTime}</span>
            <span>·</span>
            <span>{tip.date}</span>
            <span>·</span>
            <span>By Parker's Crew</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container tip-detail__body">
          <article className="tip-detail__article">
            {renderBody(tip.body)}
          </article>

          <aside className="tip-detail__sidebar">
            <div className="tip-detail__cta-card">
              <h3>Ready for a Pro to Handle It?</h3>
              <p>Get a free estimate from Parker's crew.</p>
              <button
                className="btn btn--primary"
                onClick={() => navigate('/quote')}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Get a Free Estimate
              </button>
            </div>
            <div className="tip-detail__more">
              <h4>More Tips</h4>
              {others.map(t => (
                <Link to={`/tips/${t.slug}`} className="tip-detail__more-link" key={t.slug}>
                  <span className="tips-card__category">{t.category}</span>
                  <strong>{t.title}</strong>
                  <span>{t.readTime}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default TipDetail