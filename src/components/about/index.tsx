import { RefObject } from "react";
import { Certificates, Education, Work } from "./index.data";
import ResponsiveImage from "../imagewrapper";

const About: React.FC<{ aboutRef: RefObject<HTMLDivElement | null> }> = ({
  aboutRef,
}) => {
  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-15 max-w-screen-xl mx-auto px-5 pb-10"
    >
      <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl border-b-3 border-[#d8a013] w-fit self-center">
        About
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        {" "}
        <div className="flex flex-col gap-5">
          <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">
            Education
          </h2>
          {Education.map((item, index) => (
            <div key={index} className="w-full flex gap-3 items-center justify-between text-wrap break-words ">
              <ResponsiveImage
                src={item.image}
                webp=""
                alt="About section"
                className="w-30 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"
              />
              <p className="text-md sm:text-lg">
                {item.description}{" "}
                <span className="text-sm">({item.date})</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">
            Work Experience
          </h2>
          {Work.map((item, index) => (
            <div  key={index} className="w-full flex gap-3 items-center justify-between text-wrap break-words ">
              <ResponsiveImage
                src={item.image}
                webp=""
                alt="About section"
                className="w-30 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"
              />
              <p className="text-md sm:text-lg">
                {item.description}{" "}
                <span className="text-sm">({item.date})</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">
            Certificates
          </h2>
          {Certificates.map((item, index) => (
            <div key={index} className="w-full flex gap-3 items-center justify-between text-wrap break-words ">
              <ResponsiveImage
                src={item.image}
                webp=""
                alt="About section"
                className="w-30 h-30 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black]"
              />
              <p className="text-md sm:text-lg">
                {item.description}{" "}
                <span className="text-sm">({item.date})</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="border-b-3 border-[#d8a013] text-[24px] font-semibold">
            Extra
          </h2>
          <div className="w-full text-wrap break-words">
            <p className="text-md sm:text-lg">
              I'm currently open to frontend roles or freelance gigs, I'd like
              to get my experience up, so feel free to contact me on linkedin or
              email me at:{" "}
              <a
                href="mailto:levanmosiashvili5@gmail.com"
                className="font-medium text-xl hover:underline cursor-pointer"
              >
                levanmosiashvili5@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
