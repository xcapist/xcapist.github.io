import React from 'react'

type Project = {
  id: string
  title: string
  description: string
  live?: string
  repo?: string
}

type Props = {
  projects: Project[]
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className="container section projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <div className="project-card-body">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
            </div>
            <div className="project-card-actions">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="btn small">Live</a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="btn small outline">Code</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
