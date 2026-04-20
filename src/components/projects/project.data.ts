import gymgear from "@/assets/projectImages/GymGearNew.png";
import koko from "@/assets/projectImages/KoKo.jpg";
import neighbourly from "@/assets/projectImages/Neighbourly.jpg";
import Kiu from "@/assets/projectImages/KIU.jpg";
import EvCarCharger from "@/assets/projectImages/EvCarCharger.jpg";
import gymgearW from "@/assets/projectImages/GymGearNew.png";
import kokoW from "@/assets/projectImages/KoKo.webp";
import neighbourlyW from "@/assets/projectImages/Neighbourly.webp";
import KiuW from "@/assets/projectImages/KIU.webp";
import EvCarChargerW from "@/assets/projectImages/EvCarCharger.webp";
export const projectData: ProjectDataType[] = [
  {
    title: "GymGear",
    image: gymgear,
    imageWebp: gymgearW,
    description:
      "A full-featured e-commerce platform for gym equipment. Includes user authentication, profiles with order history and wishlists, and product reviews. Data is managed via Supabase.",
    techstack: "React, TypeScript, Supabase, React Query, React Hook Form, Zod, Tailwind, Radix UI, Framer Motion",
    webLink: "https://gym-app-7y5y.vercel.app/",
    githubLink: "https://github.com/Mosa-5/gym-app",
  },
  {
    title: "KIU",
    image: Kiu,
    imageWebp: KiuW,
    description:
      "A modern, responsive, and multilingual university website built with React, TypeScript, and Vite. Developed as a university project to represent Kutaisi International University (KIU) with dynamic content, interactive pages, and a polished user experience.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://kiu-website.vercel.app/en",
    githubLink: "https://github.com/Mosa-5/Kiu_website",
  },
  {
    title: "KoKo",
    image: koko,
    imageWebp: kokoW,
    description:
      "A playful educational app that helps users learn and practice sign language through interactive features and a clean, user-friendly interface.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://koko-lilac.vercel.app/home",
    githubLink: "https://github.com/Mosa-5/koko",
  },
  {
  title: "EV Car Charger",
  image: EvCarCharger,
  imageWebp: EvCarChargerW,
  description:
    "A collaborative EV charging platform built with a friend. Features a fully functioning customer website with payment integration, plus a separate admin panel. The design was constrained by the site owner, so the focus was on clean, responsive, and reliable implementation.",
  techstack: "React, TypeScript, Ant Design, Supabase, Node.js",
  webLink: "https://www.evcarcharger.ge/ka",
  githubLink: "",
},
  {
    title: "Neighbourly",
    image: neighbourly,
    imageWebp: neighbourlyW,
    description:
      "A web app designed to connect users with local volunteer opportunities. Created based on a provided Figma design, focused on responsiveness and accessibility.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://neighbourly-two.vercel.app/",
    githubLink: "https://github.com/Mosa-5/Neighbourly",
  },
];

type ProjectDataType = {
  title: string;
  image: string;
  imageWebp: string;
  description: string;
  techstack: string;
  webLink: string;
  githubLink: string;
};
