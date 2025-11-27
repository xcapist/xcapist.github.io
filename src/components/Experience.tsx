import React from 'react'

type Job = {
  id: string
  company: string
  role: string
  timeframe: string
  bullets?: string[]
}

type Props = { jobs: Job[] }

const Experience: React.FC<Props> = ({ jobs }) => {
  return (
    <section id="experience" className="container section experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {jobs.map((j) => (
          <div key={j.id} className="job">
            <div className="job-meta">
              <strong className="company">{j.company}</strong>
              <span className="role">{j.role}</span>
              <span className="time">{j.timeframe}</span>
            </div>
            {j.bullets && (
              <ul className="job-bullets">
                {j.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
