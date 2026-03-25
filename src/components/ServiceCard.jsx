import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Shovel, Trees, Layers, Snowflake, ArrowRight } from 'lucide-react'
import '../css/ServiceCard.css'

const iconMap = {
  lawncare:    <Trees size={24} />,
  landscaping: <Shovel size={24} />,
  hardscapes:  <Layers size={24} />,
  specialty:   <Snowflake size={24} />,
}

const ServiceCard = ({ category, title, description, image }) => {
  const navigate = useNavigate()
  return (
    <div className="service-card" onClick={() => navigate(`/services/${category}`)}>
      <div className="service-card__img-wrap">
        <img src={image} alt={title} className="service-card__img" />
        <div className="service-card__overlay" />
      </div>
      <div className="service-card__body">
        <span className="service-card__icon">{iconMap[category]}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="service-card__cta">View Work <ArrowRight size={14} /></span>
      </div>
    </div>
  )
}

export default ServiceCard