import About from "@/components/about";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/techstack";
import { useRef } from "react";




const Home = () => {

      const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
  };

  const scrollTo = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };


    return(
         <div className='w-full sm:px-5 py-10 lg:p-10 max-w-[1280px] m-auto text-center'>
      <Header scrollTo = {scrollTo} />
      <Hero/>
      <div className='flex flex-col gap-40 mt-40 fancy-block *:pt-10'>
      <TechStack homeRef = {sectionRefs.home}/>
      <Projects projectsRef = {sectionRefs.projects} />
      <About aboutRef = {sectionRefs.about}/>
      </div>
    </div>
  )
}


export default Home;