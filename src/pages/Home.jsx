import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShieldCheck, MapPin, Camera, MessageSquare, ArrowRight, Phone } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import TestimonialBlock from '../components/TestimonialBlock'
import { services } from '../data/services'
import { tips } from '../data/tips'
import '../css/Home.css'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero fullscreen">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__trust-badges fade-up">
            <span className="trust-badge"><ShieldCheck size={14} /> Licensed &amp; Insured</span>
            <span className="trust-badge"><MapPin size={14} /> Serving Central Indiana</span>
          </div>
          <h1 className="hero__headline fade-up fade-up-delay-1">
            Perfection Begins<br />with Parker's
          </h1>
          <p className="hero__sub fade-up fade-up-delay-2">
            Professional hardscaping, landscaping, and lawn care — built to impress, maintained to last.
          </p>
          <div className="hero__actions fade-up fade-up-delay-3">
            <button className="btn btn--primary" onClick={() => navigate('/quote')}>
              Get a Free Estimate
            </button>
            <button className="btn btn--outline-light" onClick={() => navigate('/services/hardscapes')}>
              View Our Work
            </button>
          </div>
          <p className="hero__llc fade-up fade-up-delay-3">Parker's Lawn &amp; Landscaping LLC · Licensed through the Office of Indiana State Chemist</p>
        </div>
        <div className="hero__scroll-hint"><span /></div>
      </section>

      {/* ── Services ── */}
      <section className="section fullscreen">
        <div className="container">
          <p className="section__label">What We Do</p>
          <h2 className="section__title">Our Services</h2>
          <div className="divider" />
          <p className="section__subtitle">
            From a freshly edged lawn to a fully transformed outdoor living space — we handle every detail with craftsmanship you can see.
          </p>
          <div className="home__services-grid">
            {Object.entries(services).map(([key, svc]) => (
              <ServiceCard
                key={key}
                category={key}
                title={svc.title}
                description={svc.tagline}
                image={svc.photos[0].src}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section section--dark fullscreen why-us">
        <div className="container">
          <p className="section__label section__label--light">Why Parker's</p>
          <h2 className="section__title" style={{ color: 'white' }}>The Standard We Hold Ourselves To</h2>
          <div className="divider" style={{ background: 'var(--green-light)' }} />
          <div className="why-us__grid">
            {[
              { icon: <ShieldCheck size={28} />,    title: 'Licensed & Insured',      desc: 'Fully insured and licensed through the Office of Indiana State Chemist for pesticide and fertilizer application. You are protected.' },
              { icon: <MapPin size={28} />,         title: 'Local & Owner-Operated',  desc: 'Parker and Danielle are on every job. You deal directly with the owners, not a call center or a subcontractor.' },
              { icon: <Camera size={28} />,         title: 'Photo Documentation',     desc: 'We document every project start to finish so you can see exactly what was done and share results with confidence.' },
              { icon: <MessageSquare size={28} />,  title: 'Clear Communication',     desc: 'From estimate to final walkthrough, you always know what is happening, when, and how much it costs.' },
            ].map((item, i) => (
              <div className="why-us__card" key={i}>
                <span className="why-us__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialBlock />

      {/* ── Tips Preview ── */}
      <section className="section fullscreen">
        <div className="container">
          <p className="section__label">From the Pros</p>
          <h2 className="section__title">Tips &amp; Tricks</h2>
          <div className="divider" />
          <div className="home__tips-grid">
            {tips.slice(0, 3).map((tip) => (
              <Link to={`/tips/${tip.slug}`} className="tip-card" key={tip.slug}>
                <span className="tip-card__category">{tip.category}</span>
                <h3>{tip.title}</h3>
                <p>{tip.excerpt}</p>
                <span className="tip-card__meta">{tip.readTime} · {tip.date}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/tips" className="btn btn--outline">See All Tips <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="section section--cream fullscreen service-area">
        <div className="container">
          <p className="section__label">Where We Work</p>
          <h2 className="section__title">Serving Central Indiana</h2>
          <div className="divider" />
          <p className="section__subtitle">
            We proudly serve homeowners and businesses across Central Indiana. Not sure if we cover your area? Give us a call and we will let you know.
          </p>
          <div className="service-area__grid">
            {['Indianapolis', 'Carmel', 'Fishers', 'Noblesville', 'Westfield', 'Zionsville', 'Brownsburg', 'Avon', 'Plainfield', 'Greenwood', 'Mooresville', 'Lebanon'].map(city => (
              <div className="service-area__city" key={city}>
                <MapPin size={14} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section fullscreen cta-banner-section">
        <div className="container">
          <div className="cta-banner__inner">
            <div>
              <h2>Ready for a Yard You're Proud Of?</h2>
              <p>Get a free, no-pressure estimate from Parker's crew. We will walk the property, talk through your vision, and give you a clear quote.</p>
            </div>
            <div className="cta-banner__actions">
              <button className="btn btn--primary" onClick={() => navigate('/quote')}>
                Request Free Estimate <ArrowRight size={14} />
              </button>
              <a href="tel:+13175034648" className="btn btn--outline">
                <Phone size={14} /> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home