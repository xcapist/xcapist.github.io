import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} xcapist — Built with Vite + React</div>
        <div className="socials">
          <a href="#" aria-label="GitHub">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
