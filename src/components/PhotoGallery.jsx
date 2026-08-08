import React, { useState } from 'react'
import { Play } from 'lucide-react'
import '../css/PhotoGallery.css'

// `photos` items are either:
//   images: { src, alt, caption }
//   videos: { type: 'video', src, poster, alt, caption }
const PhotoGallery = ({ photos }) => {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <div className="gallery">
        {photos.map((item, i) => {
          const isVideo = item.type === 'video'
          return (
            <div className="gallery__item" key={i} onClick={() => setLightbox(item)}>
              <img src={isVideo ? item.poster : item.src} alt={item.alt} loading="lazy" />
              {isVideo && (
                <span className="gallery__play">
                  <Play size={22} fill="white" />
                </span>
              )}
              {item.caption && <div className="gallery__caption">{item.caption}</div>}
            </div>
          )
        })}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          {lightbox.type === 'video' ? (
            <video
              src={lightbox.src}
              poster={lightbox.poster}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img src={lightbox.src} alt={lightbox.alt} />
          )}
          {lightbox.caption && <p className="lightbox__caption">{lightbox.caption}</p>}
        </div>
      )}
    </>
  )
}

export default PhotoGallery
