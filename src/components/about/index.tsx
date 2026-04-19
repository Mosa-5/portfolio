import { RefObject, useState } from "react";
import { Certificates, Education, Work } from "./index.data";
import ResponsiveImage from "../imagewrapper";
import resumePdf from "@/assets/Levan Mosiashvili Resume.pdf?url";

const EMAIL = "levanmosiashvili5@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/levan-mosiashvili-39165b301/";
const GITHUB_URL = "https://github.com/Mosa-5";

type ConnectCardProps = {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  href?: string;
  onClick?: () => void;
  download?: string;
  external?: boolean;
};

const ConnectCard = ({
  icon,
  label,
  sublabel,
  href,
  onClick,
  download,
  external,
}: ConnectCardProps) => {
  const className =
    "group flex items-center gap-4 p-4 sm:p-5 border-2 border-black rounded-lg bg-[#25282B] text-white shadow-[4px_4px_0_0_black] hover:shadow-[1px_1px_0_0_black] hover:translate-x-[3px] hover:translate-y-[3px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 cursor-pointer text-start";
  const inner = (
    <>
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#d8a013] text-[#25282B] shrink-0">
        {icon}
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-semibold text-lg leading-tight text-white">{label}</span>
        <span className="text-sm text-white/70 truncate">{sublabel}</span>
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={download}
        className={className}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={className}>
      {inner}
    </button>
  );
};

const About: React.FC<{ aboutRef: RefObject<HTMLDivElement | null> }> = ({
  aboutRef,
}) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

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
            Connect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ConnectCard
              label="LinkedIn"
              sublabel="levan-mosiashvili"
              href={LINKEDIN_URL}
              external
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <ConnectCard
              label="GitHub"
              sublabel="@Mosa-5"
              href={GITHUB_URL}
              external
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              }
            />
            <ConnectCard
              label={copied ? "Copied!" : "Email"}
              sublabel={EMAIL}
              onClick={copyEmail}
              icon={
                copied ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                    aria-hidden="true"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                )
              }
            />
            <ConnectCard
              label="Download Resume"
              sublabel="PDF"
              href={resumePdf}
              download="Levan-Mosiashvili-Resume.pdf"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
