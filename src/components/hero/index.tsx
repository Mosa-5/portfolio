import imageUrl from "../../assets/hero image.svg";
import resumeFile from '@/assets/Resume_Levan_Mosiashvili.pdf';
const Hero = () => {


    return(
        <div className="flex w-full justify-center sm:justify-between items-center mt-30">
        <div className="flex flex-col gap-10 items-center sm:items-start w-full max-w-lg">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
              <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-xl lg:text-3xl font-medium">Hello, I'm Levan,</h2>
     
<img src={imageUrl} className="sm:hidden max-w-20 max-h-20"/>
           
  
            </div>
            <h1 className="leading-tight font-extrabold text-6xl sm:text-6xl lg:text-8xl text-shadow">Frontend Developer</h1>
            <h2 className="text-xl sm:text-xl lg:text-3xl font-medium mt-3 sm:mt-0">based in Georgia.</h2>
            </div>
            <a href={resumeFile} download>
            <button className="flex gap-2 border-2 bg-[#34347C] text-md lg:text-lg hover:bg-[#03055e78] rounded-lg px-6 py-3 md:w-fit text-white shadow-[4px_4px_0_0_black] cursor-pointer font-semibold text-center no-underline select-none transition-all hover:bg-main-hover active:shadow-[2px_2px_0_0_black] active:translate-x-[2px] active:translate-y-[2px] items-center justify-center bg-main-color border-black text-background-color">
      Resume
      <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
    </a>
       </div>
   
<img src={imageUrl} className="hidden w-full sm:block max-w-xs lg:max-w-md"/>

  
       </div>
    )
}

export default Hero;