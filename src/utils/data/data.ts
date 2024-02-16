import { projectDataInterface, socialMediaDataInterface } from "@/@types/interfaces"

import ProjectImage from "../../../public/ProjectImage.png"

export const projectsCategories: string[] = ["all", "frontend", "backend", "fullstack"]

export const projects: projectDataInterface[] = [
    {
        id: 1,
        title: "Expense Manager Frontend",
        description: `
        The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses. 
        It also has a filter feature that allows you to filter expenses by year.`,
        category: "frontend",
        image: ProjectImage,
        link: "https://gerenciadordedespesas.vercel.app/",
        repository: "https://github.com/cedraz/expense-manager-front",
        tags: ["next.js", "react", "typescript", "material-ui", "axios", "react-hook-form"]
    },
    {
        id: 2,
        title: "Expense Manager Backend",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses.`,
        category: "backend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/expense-manager-back",
        tags: ["node", "typescript", "fastify", "docker", "prisma orm", "postgresql"]
    },
    {
        id: 3,
        title: "Project 3",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses. It's a simple app that allows you to add, 
        remove and edit expenses.`,
        category: "fullstack",
        image: ProjectImage,
        link: "",
        repository: "https://www.github.com",
        tags: ["react", "node", "express"]
    }
]

export const socialMedia: socialMediaDataInterface = {
    name: "Ícaro Cedraz",
    linkedin: "https://www.linkedin.com/in/%C3%ADcaro-cedraz-63a389251/",
    github: "https://github.com/cedraz",
    email: "cedrazicaro12@gmail.com",
    repository: "https://github.com/cedraz/portfolio-next"
}