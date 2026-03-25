import React, { useState } from 'react'
import { DollarSign, TrendingUp, Users, Sun, Phone, MessageSquare } from 'lucide-react'
import '../css/Careers.css'

const FORMSPREE_CAREERS_ID = 'xvzvpqew'

const Careers = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CAREERS_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const perks = [
    { icon: <DollarSign size={24} />, title: 'Competitive Pay',      desc: 'We pay fairly and reward reliability. Regular raises for crew members who show up and perform.' },
    { icon: <TrendingUp size={24} />, title: 'Room to Grow',         desc: 'Start on the crew and work your way up. We promote from within and develop leaders.' },
    { icon: <Users size={24} />,      title: 'Small Team, Big Culture', desc: "You're not a number here. Parker and Danielle work alongside the crew and treat everyone with respect." },
    { icon: <Sun size={24} />,        title: 'Outdoor Work',         desc: 'No cubicles. Every day is different — new properties, new projects, fresh air.' },
  ]

  return (
    <div className="careers-page">

      <section className="careers-hero">
        <div className="container">
          <p className="hero__eyebrow">Join the Team</p>
          <h1>Work With Parker's Crew</h1>
          <p>We're looking for hardworking, reliable people who take pride in their work. No experience required — just a strong work ethic and a willingness to learn.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section__label">Why Join Us</p>
          <h2 className="section__title">More Than Just a Job</h2>
          <div className="divider" />
          <div className="careers-page__perks">
            {perks.map((p, i) => (
              <div className="careers-perk" key={i}>
                <span className="careers-perk__icon">{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="careers-page__form-wrap">
            <div className="careers-page__form-intro">
              <p className="section__label">Apply Now</p>
              <h2>Send Us Your Application</h2>
              <div className="divider" />
              <p>Fill out the form and we'll be in touch. We review every application personally.</p>
              <div className="careers-page__contact-alt">
                <p>Prefer to reach out directly?</p>
                <a href="tel:+13175034648" className="btn btn--outline">
                  <Phone size={14} /> Call Parker
                </a>
                <a href="sms:+13175034648" className="btn btn--outline">
                  <MessageSquare size={14} /> Text Us
                </a>
              </div>
            </div>

            <div className="careers-page__form-box">
              {status === 'success' ? (
                <div className="quote-page__success">
                  <h2>Application Received!</h2>
                  <p>Thanks for your interest. Parker will review your application and reach out within a few days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="careers-form">
                  <div className="careers-form__row">
                    <div className="form-group">
                      <label htmlFor="c-firstName">First Name *</label>
                      <input id="c-firstName" name="firstName" type="text" required placeholder="First" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-lastName">Last Name *</label>
                      <input id="c-lastName" name="lastName" type="text" required placeholder="Last" />
                    </div>
                  </div>
                  <div className="careers-form__row">
                    <div className="form-group">
                      <label htmlFor="c-phone">Phone Number *</label>
                      <input id="c-phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="c-email">Email</label>
                      <input id="c-email" name="email" type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-age">Are you 18 or older? *</label>
                    <select id="c-age" name="age" required>
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No, I am under 18</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-experience">Landscaping experience?</label>
                    <select id="c-experience" name="experience">
                      <option value="">Select...</option>
                      <option value="No experience">No experience — willing to learn</option>
                      <option value="Some experience">Some experience (1–2 seasons)</option>
                      <option value="Experienced">Experienced (3+ seasons)</option>
                      <option value="Professional">Professional background</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-availability">Availability *</label>
                    <select id="c-availability" name="availability" required>
                      <option value="">Select...</option>
                      <option value="Full-time">Full-time (Mon–Fri)</option>
                      <option value="Part-time">Part-time / Weekends</option>
                      <option value="Seasonal">Seasonal only</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-transport">Reliable transportation? *</label>
                    <select id="c-transport" name="transportation" required>
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="c-message">Tell us about yourself</label>
                    <textarea id="c-message" name="message" placeholder="Why do you want to join the crew?" rows={4} />
                  </div>
                  {status === 'error' && (
                    <p className="quote-form__error">Something went wrong. Please try again or call us directly.</p>
                  )}
                  <button type="submit" className="btn btn--primary careers-form__submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Submitting...' : 'Submit Application →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Careers