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
      "A responsive, multilingual university website for Kutaisi International University. Built with dynamic content, interactive pages, and a polished multilingual user experience.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://kiu-website.vercel.app/en",
    githubLink: "https://github.com/Mosa-5/Kiu_website",
  },
  {
    title: "KoKo",
    image: koko,
    imageWebp: kokoW,
    description:
      "An educational app for learning and practising sign language. Features 3 types of exercises and webcam interactivity for real-time sign recognition, wrapped in a clean, user-friendly interface.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://koko-lilac.vercel.app/home",
    githubLink: "https://github.com/Mosa-5/koko",
  },
  {
  title: "EV Car Charger",
  image: EvCarCharger,
  imageWebp: EvCarChargerW,
  description:
    "A collaborative EV charging platform with a customer-facing site including payment integration and a separate admin panel. Design was client-constrained; focus was on clean, responsive, and reliable delivery.",
  techstack: "React, TypeScript, Ant Design, Supabase, Node.js",
  webLink: "https://www.evcarcharger.ge/ka",
  githubLink: "",
},
  {
    title: "Neighbourly",
    image: neighbourly,
    imageWebp: neighbourlyW,
    description:
      "A web app connecting users with local volunteer opportunities. Built from a provided Figma design with a focus on responsiveness and accessibility.",
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
