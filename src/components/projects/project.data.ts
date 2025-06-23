import gymgear from "@/assets/projectImages/GymGear.png";
import koko from "@/assets/projectImages/KoKo.png";
import neighbourly from "@/assets/projectImages/Neighbourly.png"
import momentum from "@/assets/projectImages/Momentum.png"

export const projectData: ProjectDataType[] = [
  {
    title: "GymGear",
    image: gymgear,
    description:
      "A full-featured e-commerce platform for gym equipment. Includes user authentication, profiles with order history and wishlists, and product reviews. Data is managed via Supabase.",
    techstack: "React, Tailwind, Supabase",
    webLink: "https://gym-app-7y5y.vercel.app/",
    githubLink: "https://github.com/Mosacd/gym-app",
  },
  {
    title: "KoKo",
    image: koko,
    description:
      "A playful educational app that helps users learn and practice sign language through interactive features and a clean, user-friendly interface.",
    techstack: "React, Tailwind",
    webLink: "https://koko-lilac.vercel.app/home",
    githubLink: "https://github.com/Mosacd/koko",
  },
  {
    title: "Neighbourly",
    image: neighbourly,
    description:
      "A web app designed to connect users with local volunteer opportunities. Created based on a provided Figma design, focused on responsiveness and accessibility.",
    techstack: "React, Tailwind",
    webLink: "https://neighbourly-two.vercel.app/",
    githubLink: "https://github.com/Mosacd/Neighbourly",
  },
  {
    title: "Momentum",
    image: momentum,
    description:
      "A Jira-style project management tool designed for 1920px desktop screens. Built for the Redberry International React x Laravel course application.",
    techstack: "React, Tailwind",
    webLink: "https://redberry-rose.vercel.app/",
    githubLink: "https://github.com/Mosacd/redberry",
  }
];

type ProjectDataType = {
    title: string,
    image:string,
    description: string,
    techstack: string,
    webLink: string,
    githubLink: string,
}