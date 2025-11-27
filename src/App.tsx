import './App.css'
import './portfolio.css'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import portfolio from './data/portfolio'

function App() {
  return (
    <div id="root">
      <Header />
      <main>
        <Hero name={portfolio.name} title={portfolio.title} />
        <About bio={portfolio.bio} highlights={portfolio.highlights} />
        <Skills tech={portfolio.tech} />
        <Projects projects={portfolio.projects} />
        <Experience jobs={portfolio.jobs} />
        <Education schools={portfolio.schools} />
        <Contact email={portfolio.email} />
      </main>
      <Footer />
    </div>
  )
}

export default App
