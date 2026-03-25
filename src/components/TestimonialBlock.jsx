import React from 'react'
import { Star } from 'lucide-react'
import '../css/TestimonialBlock.css'

const testimonials = [
  {
    name: 'Jennifer Topping',
    text: "We recently hired Parker’s Lawn & Landscaping Parker Stoldt to redo our back hill! Parker and his crew cleaned up the bushy ivy overgrown hill and built 2 retaining walls, added fabric and mulch. Flowers will be added in the spring! They did an excellent job. Highly recommend!",
    rating: 5,
    service: 'Hardscapes',
    image: '/images/image9.jpeg'
  },
  {
    name: 'Mick Indiao',
    text: 'I had Parker Stoldt out last year to replace my mulch beds and I can\'t recommend him enough! He does a quality job at a reasonable price. He also had a great crew with a great work ethic and there was constant communication. 10/10, would use him again!',
    rating: 5,
    service: 'Lawn Care',
    image: '/images/image3.jpeg'
  },
  {
    name: 'Stephanie Stout',
    text: "Thank you for the care you took to select a mulch that would be safe for our dog who enjoys napping in the landscape beds. I'm impressed with Parker's entrepreneurial spirit, strong work ethic, and the quality of service. Would highly recommend to any neighbors looking for lawn/ landscape service!",
    rating: 5,
    service: 'Landscaping',
    image: '/images/image24.jpeg'
  }
]

const Stars = ({ count }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
    ))}
  </div>
)

const TestimonialBlock = () => (
  <section className="section testimonials">
    <div className="container">
      <p className="section__label">What Clients Say</p>
      <h2 className="section__title">Real Results, Real People</h2>
      <div className="divider" />
      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <Stars count={t.rating} />
            <p className="testimonial__text">"{t.text}"</p>
            <div className="testimonial__author">
              <div className="testimonial__avatar">
                <img src={t.image} alt={t.name} onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }} />
                <span style={{display:'none'}}>{t.name[0]}</span>
              </div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.service}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialBlock