import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import PhotoGallery from '../components/PhotoGallery'
import { services } from '../data/services'
import '../css/Services.css'

const Services = () => {
  const { category } = useParams()
  const navigate = useNavigate()
  const svc = services[category]

  if (!svc) {
    return (
      <div className="container" style={{ paddingTop: '160px', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <Link to="/" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          Back Home
        </Link>
      </div>
    )
  }

  const otherServices = Object.entries(services).filter(([key]) => key !== category)

  return (
    <div className="services-page">

      <section className="services-hero">
        <div className="services-hero__bg" style={{ backgroundImage: `url(${svc.photos[0].src})` }} />
        <div className="services-hero__overlay" />
        <div className="container services-hero__content">
          <p className="hero__eyebrow">{svc.icon} Our Services</p>
          <h1>{svc.title}</h1>
          <p className="services-hero__tagline">{svc.tagline}</p>
          <button className="btn btn--primary" onClick={() => navigate('/quote')}>
            Get a Free Estimate
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-page__intro">
            <div>
              <p className="section__label">{svc.title}</p>
              <h2>What We Offer</h2>
              <div className="divider" />
              <p style={{ fontSize: '1.05rem', maxWidth: '560px' }}>{svc.description}</p>
            </div>
            <div className="services-page__features">
              <h4>Services Include</h4>
              <ul>
                {svc.features.map((f, i) => (
                  <li key={i}>
                    <span className="check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="btn btn--primary" onClick={() => navigate('/quote')} style={{ marginTop: '1.5rem' }}>
                Request Estimate →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <p className="section__label">Our Work</p>
          <h2 className="section__title">Project Gallery</h2>
          <div className="divider" />
          <PhotoGallery photos={svc.photos} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__label">Explore More</p>
          <h2 className="section__title">Other Services</h2>
          <div className="divider" />
          <div className="services-page__others">
            {otherServices.map(([key, s]) => (
              <Link to={`/services/${key}`} className="services-page__other-card" key={key}>
                <span className="services-page__other-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.tagline}</p>
                <span className="service-card__cta">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Services