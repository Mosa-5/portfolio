import { RefObject } from "react";
import Project from "./project";

const Projects:React.FC <{projectsRef: RefObject<HTMLDivElement | null>}>= ({projectsRef}) => {

    return(
        <div ref={projectsRef} className="flex flex-col gap-15">
            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl">Projects</h1>
            <Project/>
        </div>
    )
}

export default Projects;