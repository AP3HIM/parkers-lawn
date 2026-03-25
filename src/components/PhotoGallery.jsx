import React, { useState } from 'react'
import '../css/PhotoGallery.css'

const PhotoGallery = ({ photos }) => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <div className="gallery">
        {photos.map((photo, i) => (
          <div className="gallery__item" key={i} onClick={() => setLightbox(photo)}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            {photo.caption && <div className="gallery__caption">{photo.caption}</div>}
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox.src} alt={lightbox.alt} />
          {lightbox.caption && <p className="lightbox__caption">{lightbox.caption}</p>}
        </div>
      )}
    </>
  )
}

export default PhotoGallery