import gymgear from "@/assets/projectImages/GymGear.png";
import koko from "@/assets/projectImages/KoKo.png";

export const projectData: ProjectDataType[] = [
    {
        title: "GymGear",
        image: gymgear, 
        description: "E-commerce platform, selling gym equipment,profiles page storing past order info as well as wishlisted items and personal info, ability to leave reviews for products",
        techstack: "React, Tailwind, supabase for database and backend abstraction",
        webLink: "https://gym-app-7y5y.vercel.app/",
        githubLink: "https://github.com/Mosacd/gym-app",
    },
    {
        title: "KoKo",
        image: koko, 
        description: "fun little website, where users can learn/practice sign language",
        techstack: "React, Tailwind, supabase for database and backend abstraction",
        webLink: "https://kokolang.site/",
        githubLink: "https://github.com/Mosacd/koko",
    },
]

type ProjectDataType = {
    title: string,
    image:string,
    description: string,
    techstack: string,
    webLink: string,
    githubLink: string,
}