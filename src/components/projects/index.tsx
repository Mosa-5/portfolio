import { RefObject } from "react";
import Project from "./project";

const Projects:React.FC <{projectsRef: RefObject<HTMLDivElement | null>}>= ({projectsRef}) => {

    return(
        <div ref={projectsRef} className="flex flex-col gap-15">
            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl">Projects</h1>
        
            <Project/>
                {/* <div>
                    <h2 className="text-2xl font-semibold border-b-4">Personal</h2>
                    <Project/>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold border-b-4">Work</h2>

                </div> */}
                
           
        </div>
    )
}

export default Projects;