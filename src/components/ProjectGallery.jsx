import React, { useRef } from 'react'
import PhotoGallery from './PhotoGallery'
import '../css/PhotoGallery.css'

// Renders a service's photo projects as:
//  - a row of clickable cover tiles (one per project category) that jump
//    down to that category's section
//  - every category stacked below, each with its own header (the "big
//    gallery"), so all photos are always reachable by scrolling too
// Projects with no photos yet show a "coming soon" placeholder tile/section
// instead of an empty grid.
const ProjectGallery = ({ projects }) => {
  const sectionRefs = useRef({})

  const getCover = (project) => {
    const first = project.photos[0]
    if (!first) return null
    return first.type === 'video' ? first.poster : first.src
  }

  const scrollToProject = (name) => {
    const el = sectionRefs.current[name]
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="project-gallery">
      {projects.length > 1 && (
        <div className="project-gallery__nav">
          {projects.map((project) => {
            const cover = getCover(project)
            return (
              <button
                type="button"
                className="project-gallery__nav-item"
                key={project.name}
                onClick={() => scrollToProject(project.name)}
              >
                <span className="project-gallery__nav-thumb">
                  {cover ? (
                    <img src={cover} alt={project.name} loading="lazy" />
                  ) : (
                    <span className="project-gallery__nav-thumb--empty">Coming Soon</span>
                  )}
                </span>
                <span className="project-gallery__nav-label">{project.name}</span>
              </button>
            )
          })}
        </div>
      )}

      {projects.map((project) => (
        <div
          className="project-gallery__group"
          key={project.name}
          ref={(el) => { sectionRefs.current[project.name] = el }}
        >
          <h3 className="project-gallery__group-title">{project.name}</h3>
          {project.photos.length === 0 ? (
            <p className="project-gallery__empty">Photos coming soon.</p>
          ) : (
            <PhotoGallery photos={project.photos} />
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectGallery