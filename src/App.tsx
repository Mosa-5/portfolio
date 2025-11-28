import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './components/about'
import Header from './components/header'
import Hero from './components/hero'
import Projects from './components/projects'
import TechStack from './components/techstack'
import RobotChatbot from './components/chatBot'


function App() {

  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
  };

  const scrollTo = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };



  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <div  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-8 border-[#03055e5e] border-t-[#03045E] rounded-full animate-spin"
    ></div>;
  }

  return (
    <div className='w-full relative sm:px-5 py-10 lg:p-10 max-w-[1280px] m-auto text-center'>
      <Header scrollTo = {scrollTo} />
      <Hero/>
      <div className='flex flex-col gap-40 mt-40 fancy-block *:pt-10'>
      <TechStack homeRef = {sectionRefs.home}/>
      <Projects projectsRef = {sectionRefs.projects} />
      <About aboutRef = {sectionRefs.about}/>
      </div>
      <RobotChatbot/>
    </div>
  )
}

export default App
