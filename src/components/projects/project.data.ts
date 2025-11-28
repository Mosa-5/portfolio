import gymgear from "@/assets/projectImages/GymGear.jpg";
import koko from "@/assets/projectImages/KoKo.jpg";
import neighbourly from "@/assets/projectImages/Neighbourly.jpg";
import momentum from "@/assets/projectImages/Momentum.jpg";
import StarWars from "@/assets/projectImages/StarWars.jpg";
import Ecommerce from "@/assets/projectImages/Ecommerce.jpg";
import Kiu from "@/assets/projectImages/KIU.jpg";
import EvCarCharger from "@/assets/projectImages/EvCarCharger.jpg";
import gymgearW from "@/assets/projectImages/GymGear.webp";
import kokoW from "@/assets/projectImages/KoKo.webp";
import neighbourlyW from "@/assets/projectImages/Neighbourly.webp";
import momentumW from "@/assets/projectImages/Momentum.webp";
import StarWarsW from "@/assets/projectImages/StarWars.webp";
import EcommerceW from "@/assets/projectImages/Ecommerce.webp";
import KiuW from "@/assets/projectImages/KIU.webp";
import EvCarChargerW from "@/assets/projectImages/EvCarCharger.webp";
export const projectData: ProjectDataType[] = [
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
    title: "GymGear",
    image: gymgear,
    imageWebp: gymgearW,
    description:
      "A full-featured e-commerce platform for gym equipment. Includes user authentication, profiles with order history and wishlists, and product reviews. Data is managed via Supabase.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://gym-app-7y5y.vercel.app/",
    githubLink: "https://github.com/Mosacd/gym-app",
  },
  {
    title: "KoKo",
    image: koko,
    imageWebp: kokoW,
    description:
      "A playful educational app that helps users learn and practice sign language through interactive features and a clean, user-friendly interface.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://koko-lilac.vercel.app/home",
    githubLink: "https://github.com/Mosacd/koko",
  },
  {
  title: "EV Car Charger",
  image: EvCarCharger,
  imageWebp: EvCarChargerW,
  description:
    "A collaborative EV charging platform built with a friend. Features a fully functioning customer website with payment integration, plus a separate admin panel for managing products and orders. The design was constrained by the site owner, so the focus was on clean, responsive, and reliable implementation.",
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
    githubLink: "https://github.com/Mosacd/Neighbourly",
  },
  {
    title: "Star Wars",
    image: StarWars,
    imageWebp: StarWarsW,
    description:
      "A Star Wars character catalog app using SWAPI. Features pagination, search with debounce and abort controller, and individual detail pages with expandable sections for films, species, and more.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://star-wars-ruddy-five.vercel.app/",
    githubLink: "https://github.com/Mosacd/star-wars",
  },
  {
    title: "Momentum",
    image: momentum,
    imageWebp: momentumW,
    description:
      "A Jira-style project management tool designed for 1920px desktop screens. Built for the Redberry International React x Laravel course application.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://redberry-rose.vercel.app/",
    githubLink: "https://github.com/Mosacd/redberry",
  },
  {
    title: "E-commerce",
    image: Ecommerce,
    imageWebp: EcommerceW,
    description:
      "A fully custom-built e-commerce site with no component libraries or CSS frameworks. Built in plain JSX, it features category pages, individual product pages, a cart dropdown, a cart page, and a 3-step checkout flow.",
    techstack: "React (CRA), JSX, Custom CSS",
    webLink: "https://e-commerce-psi-pink-86.vercel.app/women/w1",
    githubLink: "https://github.com/Mosacd/E-commerce",
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
