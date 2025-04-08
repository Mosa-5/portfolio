import './App.css'
import About from './components/about'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import TechStack from './components/techstack'

function App() {

  return (
    <div className='w-full sm:px-5 py-10 lg:p-10 max-w-[1280px] m-auto text-center'>
      <Header />
      <Hero />
      <div className='flex flex-col gap-40 mt-40'>
      <TechStack/>
      <Projects />
      <About />
      </div>
    </div>
  )
}

export default App
