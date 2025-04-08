
export const projectData: ProjectDataType[] = [
    {
        title: "GymGear",
        image: "/public/images/gymgear.png", 
        description: "E-commerce platform, selling gym equipment,profiles page storing past order info as well as wishlisted items and personal info, ability to leave reviews for products",
        techstack: "React, Tailwind, supabase for database and backend abstraction",
        webLink: "https://gym-app-4jrt.vercel.app",
        githubLink: "https://github.com/Mosacd/gym-app",
    },
    {
        title: "KoKo",
        image: "/public/images/koko.png", 
        description: "fun little website, where users can learn/practice sign language",
        techstack: "React, Tailwind, supabase for database and backend abstraction",
        webLink: "https://gym-app-4jrt.vercel.app",
        githubLink: "https://github.com/Mosacd/gym-app",
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