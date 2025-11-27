import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand" aria-hidden>
          <strong>xcapist</strong>
        </div>

        <nav>
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact" className="cta">Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
        </div>

      </div>
    </header>
  )
}

export default Header
