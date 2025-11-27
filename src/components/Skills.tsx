import React from 'react'

type Props = {
  tech: string[]
}

const Skills: React.FC<Props> = ({ tech }) => {
  return (
    <section id="skills" className="container section skills">
      <h3>Skills</h3>
      <div className="tech-grid">
        {tech.map((t) => (
          <div key={t} className="tech-pill">{t}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
