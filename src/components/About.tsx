import React from 'react'

type Props = {
  bio: string
  highlights?: string[]
}

const About: React.FC<Props> = ({ bio, highlights = [] }) => {
  return (
    <section id="about" className="container section about">
      <h2>About</h2>
      <p className="lead">{bio}</p>
      {highlights.length > 0 && (
        <ul className="highlights">
          {highlights.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default About
