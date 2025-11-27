import React from 'react'

type Props = {
  name: string
  title: string
  ctaHref?: string
}

const Hero: React.FC<Props> = ({ name, title, ctaHref = '#contact' }) => {
  return (
    <section id="hero" className="hero container">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>{name}</h1>
          <p className="hero-tagline">{title}</p>
          <div className="hero-ctas">
            <a className="btn primary" href={ctaHref}>Contact me</a>
            <a className="btn" href="#projects">View projects</a>
          </div>
        </div>
        <div className="hero-avatar" aria-hidden>
          <div className="avatar-placeholder">XS</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
