import { useState } from 'react'
import { Project } from '../data/projects'
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa'
import './ProjectCard.css'

function getYouTubeEmbedUrl(videoUrl: string) {
  const youtubeMatch = videoUrl.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  )

  if (youtubeMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  return videoUrl
}
 
export default function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const demoVideoUrl = project.demoVideo ? getYouTubeEmbedUrl(project.demoVideo) : null
 
  return (
    <>
      <article className={`project-card${expanded ? ' project-card--expanded' : ''}`}>
        <button
          className="project-card__trigger"
          onClick={() => setExpanded((e) => !e)}
        >
          {/* Image */}
          <div className="project-card__img-wrap">
            {project.image ? (
              <img src={project.image} alt={project.title} className="project-card__img" />
            ) : (
              <div className="project-card__img-placeholder">
                <span>{project.title[0]}</span>
              </div>
            )}
          </div>

          {/* Header */}
          <div className="project-card__header">
            <div className="project-card__header-text">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__tagline">{project.tagline}</p>
            </div>
            <FaChevronDown
              className={`project-card__chevron${expanded ? ' project-card__chevron--open' : ''}`}
            />
          </div>

          {/* Tags */}
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </button>

        {/* Expandable */}
        <div className="project-card__drawer">
          <div className="project-card__drawer-inner">
            <p className="project-card__desc">{project.description}</p>
            {(project.github || project.demo || project.demoVideo) && (
              <div className="project-card__links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.demoVideo && (
                  <button
                    type="button"
                    className="project-link project-link--button"
                    onClick={() => setIsVideoOpen(true)}
                  >
                    <FaExternalLinkAlt /> Demo
                  </button>
                )}
                {!project.demoVideo && project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {demoVideoUrl && isVideoOpen && (
        <div className="project-video-modal" role="dialog" aria-modal="true" aria-label={`${project.title} demo video`}>
          <button
            type="button"
            className="project-video-modal__backdrop"
            aria-label="Close video modal"
            onClick={() => setIsVideoOpen(false)}
          />
          <div className="project-video-modal__content">
            <button type="button" className="project-video-modal__close" onClick={() => setIsVideoOpen(false)}>
              Close
            </button>
            <iframe
              className="project-video-modal__frame"
              src={demoVideoUrl}
              title={`${project.title} demo`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  )
}