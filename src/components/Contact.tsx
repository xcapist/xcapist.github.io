import React from 'react'

type Props = { email?: string }

const Contact: React.FC<Props> = ({ email = 'hello@example.com' }) => {
  return (
    <section id="contact" className="container section contact">
      <h2>Contact</h2>
      <p>If you'd like to reach out, the fastest way is sending an email.</p>
      <a href={`mailto:${email}`} className="btn primary">Email me</a>
    </section>
  )
}

export default Contact
