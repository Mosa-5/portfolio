import { RefObject } from "react";
import { techstackData } from "./techstackData";

const TechStack:React.FC<{homeRef: RefObject<HTMLDivElement | null>}>= ({homeRef}) => {

    return (
        <div ref={homeRef} className="flex flex-col gap-15">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold">Tech Stack</h2>
      
        <ul className="grid  w-full grid-cols-2 sm:grid-cols-4  md:grid-cols-5 gap-y-10 gap-x-4 text-lg font-medium place-items-center"
        >
            {techstackData.map((tech, index) => (
                <li key={index} className="flex group flex-col items-center gap-2 w-20 sm:w-30 sm:text-2xl hover:-translate-y-2 duration-300 cursor-pointer hover:scale-105 *:duration-300">
                   {tech.svg}
                    <span className="text-center">{tech.name}</span>
                </li>
            ))}
        </ul>
        </div>
    );
    }

export default TechStack;