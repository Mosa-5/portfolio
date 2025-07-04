import gymgear from "@/assets/projectImages/GymGear.png";
import koko from "@/assets/projectImages/KoKo.png";
import neighbourly from "@/assets/projectImages/Neighbourly.png"
import momentum from "@/assets/projectImages/Momentum.png"
import StarWars from "@/assets/projectImages/starWars.png"
import Ecommerce from "@/assets/projectImages/Ecommerce.png"

export const projectData: ProjectDataType[] = [
  {
    title: "GymGear",
    image: gymgear,
    description:
      "A full-featured e-commerce platform for gym equipment. Includes user authentication, profiles with order history and wishlists, and product reviews. Data is managed via Supabase.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://gym-app-7y5y.vercel.app/",
    githubLink: "https://github.com/Mosacd/gym-app",
  },
  {
    title: "KoKo",
    image: koko,
    description:
      "A playful educational app that helps users learn and practice sign language through interactive features and a clean, user-friendly interface.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://koko-lilac.vercel.app/home",
    githubLink: "https://github.com/Mosacd/koko",
  },
  {
    title: "Neighbourly",
    image: neighbourly,
    description:
      "A web app designed to connect users with local volunteer opportunities. Created based on a provided Figma design, focused on responsiveness and accessibility.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://neighbourly-two.vercel.app/",
    githubLink: "https://github.com/Mosacd/Neighbourly",
  },
  {
  title: "Star Wars",
  image: StarWars,
  description:
    "A Star Wars character catalog app using SWAPI. Features pagination, search with debounce and abort controller, and individual detail pages with expandable sections for films, species, and more.",
  techstack: "React, TypeScript, Tailwind, Vite",
  webLink: "https://star-wars-ruddy-five.vercel.app/",
  githubLink: "https://github.com/Mosacd/star-wars",
},
  {
    title: "Momentum",
    image: momentum,
    description:
      "A Jira-style project management tool designed for 1920px desktop screens. Built for the Redberry International React x Laravel course application.",
    techstack: "React, TypeScript, Tailwind, Vite",
    webLink: "https://redberry-rose.vercel.app/",
    githubLink: "https://github.com/Mosacd/redberry",
  },
  {
  title: "E-commerce",
  image: Ecommerce,
  description:
    "A fully custom-built e-commerce site with no component libraries or CSS frameworks. Built in plain JSX, it features category pages, individual product pages, a cart dropdown, a cart page, and a 3-step checkout flow.",
  techstack: "React (CRA), JSX, Custom CSS",
  webLink: "https://e-commerce-psi-pink-86.vercel.app/women/w1",
  githubLink: "https://github.com/Mosacd/E-commerce",
},
];

type ProjectDataType = {
    title: string,
    image:string,
    description: string,
    techstack: string,
    webLink: string,
    githubLink: string,
}