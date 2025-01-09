import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import ThreeAnimation from './components/ThreeAnimation'

export default function Page() {
  return (
    <main className="min-h-screen">
      <ThreeAnimation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <WorkExperience />
      <Contact />
    </main>
  )
}

