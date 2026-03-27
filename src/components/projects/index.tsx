import { RefObject } from "react";
import Project from "./project";

const Projects:React.FC <{projectsRef: RefObject<HTMLDivElement | null>}>= ({projectsRef}) => {

    return(
        <div ref={projectsRef} className="flex flex-col gap-15">
            <h2 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl border-b-3 border-[#d8a013] w-fit self-center">Projects</h2>  
            <Project/>           
        </div>
    )
}

export default Projects;