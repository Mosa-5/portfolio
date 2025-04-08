import imageUrl from "../../assets/0be52701-c4b1-4e96-88b8-c1b0e260ed59.jpg"

const Hero = () => {


    return(
        <div className="flex w-full justify-between items-center mt-30">
        <div className="flex flex-col gap-10 items-center sm:items-start w-full max-w-lg">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-start">
              <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium">Hello, I'm Levan,</h2>
            <img src={imageUrl} alt="" className="sm:hidden max-w-20 max-h-20 rounded-full border-2 shadow-[1px_1px_0px_0px_black]" />
            </div>
            <h1 className="leading-tight font-extrabold text-6xl sm:text-7xl lg:text-8xl text-shadow">Frontend Developer</h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mt-3 sm:mt-0">based in Georgia.</h2>
            </div>
            <button className="border-2 bg-[#03055eb4] text-md lg:text-lg hover:bg-[#03055e78] rounded-lg px-6 py-3 w-full max-w-40 sm:max-w-lg md:w-fit text-white shadow-[4px_4px_0_0_black] cursor-pointer inline-block font-semibold text-center no-underline select-none transition-all hover:bg-main-hover active:shadow-[2px_2px_0_0_black] active:translate-x-[2px] active:translate-y-[2px] items-center justify-center bg-main-color border-black text-background-color">
      Resume
    </button>
       </div>

<img src={imageUrl} alt="" className="hidden sm:block max-w-xs lg:max-w-sm max-h-md rounded-full border-2 shadow-[4px_4px_0px_0px_black]" />
       </div>
    )
}

export default Hero;