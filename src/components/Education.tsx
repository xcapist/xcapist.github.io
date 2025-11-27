import React from 'react'

type School = {
  id: string
  org: string
  degree?: string
  timeframe?: string
}

type Props = { schools: School[] }

const Education: React.FC<Props> = ({ schools }) => {
  return (
    <section id="education" className="container section education">
      <h2>Education</h2>
      <div className="education-list">
        {schools.map((s) => (
          <div key={s.id} className="school">
            <strong>{s.org}</strong>
            {s.degree && <div className="degree">{s.degree}</div>}
            {s.timeframe && <div className="time">{s.timeframe}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
