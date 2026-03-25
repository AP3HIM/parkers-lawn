import React, { useState } from 'react'
import { Phone, Mail, Star, ArrowRight } from 'lucide-react'
import '../css/Quote.css'

const FORMSPREE_ID = 'xkopwzdv'

const Quote = () => {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); e.target.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className="quote-page">
      <div className="quote-page__hero">
        <div className="container">
          <p className="hero__eyebrow">Free Estimate</p>
          <h1>Request a Quote</h1>
          <p>Fill out the form and Parker's team will reach out within 24 hours to schedule a walkthrough.</p>
        </div>
      </div>

      <div className="container quote-page__body">
        <div className="quote-page__form-wrap">
          {status === 'success' ? (
            <div className="quote-page__success">
              <h2>Request Received!</h2>
              <p>Thanks for reaching out. Parker or Danielle will contact you within 24 hours to set up your free estimate.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="quote-form__row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" name="firstName" type="text" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Smith" />
                </div>
              </div>
              <div className="quote-form__row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" required placeholder="(555) 555-5555" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Property Address *</label>
                <input id="address" name="address" type="text" required placeholder="123 Main St, City, State ZIP" />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Needed *</label>
                <select id="service" name="service" required>
                  <option value="">Select a service...</option>
                  <option value="Lawn Care">Lawn Care</option>
                  <option value="Landscaping">Landscaping</option>
                  <option value="Hardscapes">Hardscapes</option>
                  <option value="Specialty Services">Specialty Services</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Not Sure">Not Sure — Need Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Preferred Timeline</label>
                <select id="timeline" name="timeline">
                  <option value="">Select timeline...</option>
                  <option value="ASAP">As Soon as Possible</option>
                  <option value="1-2 weeks">1–2 Weeks</option>
                  <option value="1 month">Within a Month</option>
                  <option value="Flexible">Flexible / Planning Ahead</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe what you have in mind — the more detail, the better we can prepare for your estimate..."
                  rows={5}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hearAbout">How did you hear about us?</label>
                <select id="hearAbout" name="hearAbout">
                  <option value="">Select one...</option>
                  <option value="Google">Google</option>
                  <option value="Yelp">Yelp</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referral">Friend / Neighbor Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {status === 'error' && (
                <p className="quote-form__error">Something went wrong. Please try again or call us directly.</p>
              )}
              <button type="submit" className="btn btn--primary quote-form__submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : <><span>Submit Estimate Request</span><ArrowRight size={14} /></>}
              </button>
            </form>
          )}
        </div>

        <div className="quote-page__sidebar">
          <div className="quote-sidebar__card">
            <h3>Prefer to Reach Out Directly?</h3>
            <div className="quote-sidebar__contacts">
              <a href="tel:+13175034648" className="quote-sidebar__contact">
                <Phone size={20} strokeWidth={1.5} />
                <div><strong>Call or Text</strong><span>(317) 503-4648</span></div>
              </a>
              <a href="mailto:parkerslawnandlandscaping@myyahoo.com" className="quote-sidebar__contact">
                <Mail size={20} strokeWidth={1.5} />
                <div><strong>Email Us</strong><span>parkerslawnandlandscaping@myyahoo.com</span></div>
              </a>
              <a href="https://yelp.com" target="_blank" rel="noreferrer" className="quote-sidebar__contact">
                <Star size={20} strokeWidth={1.5} />
                <div><strong>Find Us on Yelp</strong><span>Parker's Lawn &amp; Landscaping</span></div>
              </a>
            </div>
          </div>
          <div className="quote-sidebar__card quote-sidebar__card--green">
            <h3>What to Expect</h3>
            <ol className="quote-sidebar__steps">
              <li><span>1</span> Submit this form or call us</li>
              <li><span>2</span> We schedule a free property walkthrough</li>
              <li><span>3</span> You receive a detailed written estimate</li>
              <li><span>4</span> We get to work — no surprises</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote