import { RefObject } from "react";
import { Certificates, Education, Work } from "./index.data";
import ResponsiveImage from "../imagewrapper";

const About: React.FC<{ aboutRef: RefObject<HTMLDivElement | null> }> = ({
  aboutRef,
}) => {

  return (
    <div
      ref={aboutRef}
      className="flex flex-col gap-10 sm:gap-15 w-full max-w-7xl mx-auto items-start px-4 sm:px-5 pb-10"
    >
      <h2 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl border-b-3 border-[#d8a013] w-fit self-center">
        About
      </h2>
      <div className="w-full grid grid-cols-1 gap-12 sm:gap-20">
        {" "}
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-start text-[24px] font-semibold">
            Work Experience
          </h2>
          {Work.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-3 text-wrap wrap-break-word">
              <div className="w-full flex gap-3 sm:gap-6 md:gap-10 items-start">
                {item.image ? (
                  <ResponsiveImage
                    src={item.image}
                    webp=""
                    alt={item.title}
                    className="w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black] object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0 flex items-center justify-center rounded-lg border-black border-2 shadow-[4px_4px_0_0_black] bg-[#25282B]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d8a013"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 sm:w-12 sm:h-12"
                      aria-label={item.title}
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                )}
                <div className="flex-1 min-w-0 flex flex-col gap-1 text-start">
                  <p className="text-md sm:text-lg">
                    {item.title}{" "}
                    <span className="text-sm">({item.date})</span>
                  </p>
                  <p className="text-sm sm:text-md border-amber-500 border-l-2 pl-2">
                    {item.workPlace}
                  </p>
                  <p className="hidden sm:block text-start text-sm sm:text-md text-[#25282B]/80 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="sm:hidden text-start text-sm text-[#25282B]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-start text-[24px] font-semibold">
            Education
          </h2>
          {Education.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-3 text-wrap wrap-break-word">
              <div className="w-full flex gap-3 sm:gap-6 md:gap-10 items-start">
                <ResponsiveImage
                  src={item.image}
                  webp=""
                  alt={item.title}
                  className="w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black] object-cover"
                />
                <div className="flex-1 min-w-0 flex flex-col gap-1 text-start">
                  <p className="text-md sm:text-lg">
                    {item.title}{" "}
                    <span className="text-sm">({item.date})</span>
                  </p>
                  <p className="text-sm sm:text-md border-amber-500 border-l-2 pl-2">
                    {item.institution}
                  </p>
                  <p className="hidden sm:block text-start text-sm sm:text-md text-[#25282B]/80 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="sm:hidden text-start text-sm text-[#25282B]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-full gap-5">
          <h2 className="text-start text-[24px] font-semibold">
            Certificates
          </h2>
          {Certificates.map((item, index) => (
            <div key={index} className="w-full flex flex-col gap-3 text-wrap wrap-break-word">
              <div className="w-full flex gap-3 sm:gap-6 md:gap-10 items-start">
                <ResponsiveImage
                  src={item.image}
                  webp=""
                  alt={item.title}
                  className="w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0 rounded-lg border-black border-2 shadow-[4px_4px_0_0_black] object-cover bg-white"
                />
                <div className="flex-1 min-w-0 flex flex-col gap-1 text-start">
                  <p className="text-md sm:text-lg">
                    {item.title}{" "}
                    <span className="text-sm">({item.date})</span>
                  </p>
                  <p className="text-sm sm:text-md border-amber-500 border-l-2 pl-2">
                    {item.institution}
                  </p>
                  <p className="hidden sm:block text-start text-sm sm:text-md text-[#25282B]/80 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="sm:hidden text-start text-sm text-[#25282B]/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
