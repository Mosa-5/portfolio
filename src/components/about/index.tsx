import { RefObject } from "react";
import { Certificates, Education, Work } from "./index.data";

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

        <div className="flex flex-col w-full gap-4">
          <h2 className="text-start text-[24px] font-semibold">Work Experience</h2>
          {Work.map((item, index) => (
            <div key={index} className="about-card flex flex-col gap-3 p-4 sm:p-5 text-start bg-[#25282B] rounded-sm border-l-4 border-[#d8a013]">
              <div className="flex items-center gap-4">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-14 h-14 flex-shrink-0 rounded-md object-contain" />
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d8a013" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-14 h-14 flex-shrink-0">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                )}
                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-semibold text-lg leading-tight">{item.title}</p>
                  <span className="text-sm text-white/60">{item.date}</span>
                </div>
              </div>
              <p className="text-sm text-[#d8a013] font-semibold pl-18">{item.workPlace}</p>
              <p className="text-sm text-white/70 leading-relaxed pl-18">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full gap-4">
          <h2 className="text-start text-[24px] font-semibold">Education</h2>
          {Education.map((item, index) => (
            <div key={index} className="about-card flex flex-col gap-3 p-4 sm:p-5 text-start bg-[#25282B] rounded-sm border-l-4 border-[#d8a013]">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-14 h-14 flex-shrink-0 rounded-md object-contain" />
                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-semibold text-lg leading-tight">{item.title}</p>
                  <span className="text-sm text-white/60">{item.date}</span>
                </div>
              </div>
              <p className="text-sm text-[#d8a013] font-semibold pl-18">{item.institution}</p>
              <p className="text-sm text-white/70 leading-relaxed pl-18">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full gap-4">
          <h2 className="text-start text-[24px] font-semibold">Certificates</h2>
          {Certificates.map((item, index) => (
            <div key={index} className="about-card flex flex-col gap-3 p-4 sm:p-5 text-start bg-[#25282B] rounded-sm border-l-4 border-[#d8a013]">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-14 h-14 flex-shrink-0 rounded-md object-contain" />
                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-semibold text-lg leading-tight">{item.title}</p>
                  <span className="text-sm text-white/60">{item.date}</span>
                </div>
              </div>
              <p className="text-sm text-[#d8a013] font-semibold pl-18">{item.institution}</p>
              <p className="text-sm text-white/70 leading-relaxed pl-18">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
