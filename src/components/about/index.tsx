import { RefObject } from "react";
import Uni from "../../assets/kiuLogo.jpg"
import reactLogo from "../../assets/ReactCoursePic.avif"
import schoolLogo from "../../assets/vekualogo.png"

const About:React.FC<{aboutRef: RefObject<HTMLDivElement | null>}>= ({aboutRef}) => {
    return(
        <div ref={aboutRef} className="flex flex-col gap-15 max-w-screen-xl mx-auto px-5 pb-10">
            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl border-b-3 border-[#d8a013] w-fit self-center">About</h1>
           <div className="flex flex-col gap-20 justify-between sm:flex-row sm:*:w-1/2">
            <div className="flex flex-col gap-5">
            <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">Education</h2>
            <div className="w-full flex gap-2 items-center justify-between text-wrap break-words ">
                <img src={Uni} alt="" className="w-30 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"/>
            <p className="text-md sm:text-lg">CS sophemore at Kutaisi International University <span className="text-sm">(2022 - current)</span></p>
            </div>

            <div className="w-full flex gap-2 items-center justify-between text-wrap break-words ">
                <img src={reactLogo} alt="" className="w-30 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"/>
                <p className="text-md sm:text-lg">finished React Accelerator course at TBC IT Academy <span className="text-sm">(2023 autumn - 2024 winter)</span></p>
            </div>

            <div className="w-full flex gap-2 items-center justify-between text-wrap break-words ">
                <img src={schoolLogo} alt="" className="w-30 bg-white p-2 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"/>
                <p className="text-md sm:text-lg"> Academician Ilia Vekua Physics and Mathematics Public School No. 42 <span className="text-sm">(2016 - 2022)</span></p>
            </div>
           
           
            </div>

            <div className="flex flex-col gap-5">
            <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">Extra</h2>
            <div className="w-full text-wrap break-words ">
            <p className="text-md sm:text-lg">I'm currently open to frontend roles or freelance gigs, I'd like to get my experience up, so feel free to contact me on linkedin or email me at: <a href="mailto:levanmosiashvili5@gmail.com" className="font-medium text-xl hover:underline cursor-pointer">levanmosiashvili5@gmail.com</a></p>
            </div>
            </div>
            </div>
        </div>
    )
}


export default About;