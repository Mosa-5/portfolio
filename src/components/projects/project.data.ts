import gymgear from "@/assets/projectImages/GymGear.png";
import koko from "@/assets/projectImages/KoKo.png";
import neighbourly from "@/assets/projectImages/Neighbourly.png"

export const projectData: ProjectDataType[] = [
    {
        title: "GymGear",
        image: gymgear, 
        description: "E-commerce platform, selling gym equipment,profiles page storing past order info as well as wishlisted items and personal info, ability to leave reviews for products",
        techstack: "React, Tailwind, supabase for database",
        webLink: "https://gym-app-7y5y.vercel.app/",
        githubLink: "https://github.com/Mosacd/gym-app",
    },
    {
        title: "KoKo",
        image: koko, 
        description: "fun little website, where users can learn/practice sign language",
        techstack: "React, Tailwind",
        webLink: "https://kokolang.site/",
        githubLink: "https://github.com/Mosacd/koko",
    },
    {
        title: "Neighbourly",
        image: neighbourly, 
        description: "simple web application that helps users discover volunteer opportunities in their community",
        techstack: "React, Tailwind",
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