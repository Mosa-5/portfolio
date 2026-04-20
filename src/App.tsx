import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Header from './components/header'
import Hero from './components/hero'

const TechStack = lazy(() => import('./components/techstack'))
const Projects = lazy(() => import('./components/projects'))
const About = lazy(() => import('./components/about'))
const RobotChatbot = lazy(() => import('./components/chatBot'))


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
    Promise.all([
      document.fonts.load('500 1em Poppins'),
      document.fonts.load('600 1em Poppins'),
      document.fonts.load('800 1em Poppins'),
    ]).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-8 border-[#d8a01340] border-t-[#d8a013] rounded-full animate-spin"
    ></div>;
  }

  return (
    <div className='w-full relative sm:px-5 py-10 lg:p-10 max-w-7xl 2xl:max-w-screen-2xl m-auto text-center'>
      <Header scrollTo = {scrollTo} />
      <Hero/>
      <Suspense>
      <div className='flex flex-col gap-40 mt-40 fancy-block *:pt-10'>
      <TechStack homeRef = {sectionRefs.home}/>
      <Projects projectsRef = {sectionRefs.projects} />
      <About aboutRef = {sectionRefs.about}/>
      </div>
      <RobotChatbot/>
      </Suspense>
    </div>
  )
}

export default App
