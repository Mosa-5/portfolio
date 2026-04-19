import Uni from "@/assets/kiuLogo.jpg";
import devsData from "@/assets/devsdata.jpeg";
import tbc from "@/assets/TBC.png";
export const Education = [
  {
    image: Uni,
    title: "B.Sc. in Computer Science (Management Minor)",
    institution: "Kutaisi International University - Senior Year",
    date: "2022 - Present",
    description:
      "Relevant coursework: Web Development (HTML/CSS, JavaScript, React), Java Programming, Cloud Computing (AWS), Databases (PostgreSQL, MongoDB), Software Engineering (Agile/Scrum, Waterfall), Full-Stack Development (React, TypeScript, Express.js, testing with Jest/Mocha)",
  },
];

export const Work = [
  {
    image: Uni,
    title: "Frontend Developer (Part-time)",
    workPlace: "Kutaisi International University",
    date: "2025 Nov - 2026 Apr",
    description:
      "Built the admin panel in Next.js, TypeScript, and Tailwind CSS. Separated admin architecture from the public app, implemented auth with PR and Admin roles, and built an article publish/approve workflow using Lexical for rich text editing.",
  },
  {
    image: devsData,
    title: "Junior Frontend Developer",
    workPlace: "DevsData LCC",
    date: "2025 Jul - 2026 Mar",
    description:
      "Maintaining and updating the company website, fixing bugs, implementing new designs, and ensuring site responsiveness, working with HTML, CSS/SCSS, JavaScript, PHP, and WordPress as the CMS, with Gulp handling the SCSS-to-CSS and JavaScript build pipeline.",
  },
  {
    image: null,
    title: "Freelance",
    workPlace: "Independent Projects",
    date: "2024 - 2026",
    description:
      "EV Charger E-commerce Site (evcarcharger.ge): Built with React, TypeScript, Tailwind CSS, and Supabase. Responsive UI with product catalog, cart, and checkout functionality. AI Customer Support Platform (Simpler.ge): Built backend using PostgreSQL/Drizzle ORM and BullMQ job queues. Integrated LangChain/LangGraph AI agents across Facebook, Messenger, and WhatsApp with human escalation.",
  },
  {
    image: Uni,
    title: "STA for Scripting Languages subject",
    workPlace: "Kutaisi International University",
    date: "2023 Sept - 2024 Jan",
    description:
      "Mentored students in HTML, CSS, JavaScript, and React fundamentals, supporting them with assignments and hands-on exercises.",
  },
];

export const Certificates = [
  {
    image: tbc,
    title: "React Accelerator",
    institution: "TBC IT Academy",
    date: "2023 Sept - 2024 Feb",
    description:
      "Completed an intensive program covering React fundamentals & advanced patterns. Built multiple projects using modern libraries, tools, and database integration.",
  },
];
