import { projectDataInterface, socialMediaDataInterface } from "@/@types/interfaces"

import ProjectImage from "@/assets/ProjectImage.png"
import VoiceoverPortfolio from "@/assets/VoiceoverPortfolio.png"

export const projectsCategories: string[] = ["all", "frontend", "backend"]

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
        tags: ["next.js", "react", "typescript", "material-ui", "axios", "react-hook-form", "toastify"]
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
        title: "Voiceover Portfolio",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses. It's a simple app that allows you to add, 
        remove and edit expenses.`,
        category: "frontend",
        image: VoiceoverPortfolio,
        link: "https://locutorageovana.vercel.app/",
        repository: "https://github.com/cedraz/voiceover-portfolio",
        tags: ["next.js", "react", "typescript", "material-ui", "swiper", "emailjs"]
    },
    {
        id: 4,
        title: "Picpay Backend Challenge",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses.`,
        category: "backend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/desafio-backend-picpay",
        tags: ["bun", "typescript", "elysia", "prisma orm", "postgresql", "aws rds", "zod", "axios"]
    },
    {
        id: 5,
        title: "PTDEV Challenge Frontend",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses.`,
        category: "frontend",
        image: ProjectImage,
        link: "https://axenoticias.vercel.app/",
        repository: "https://github.com/cedraz/desafio-ptdev-front",
        tags: ["html", "css", "javascript"]
    },
    {
        id: 6,
        title: "PTDEV Challenge Backend",
        description: `The frontend of an expense manager app, made with Next.js, TypeScript and Material UI. 
        It's a simple app that allows you to add, remove and edit expenses.`,
        category: "backend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/desafio-ptdev-back",
        tags: ["strapi", "javascript", "postgresql", "cloudnary", "neondb"]
    },
    {
        id: 7,
        title: "Redway Fullstack Challenge Frontend",
        description: "The frontend of an expense manager app, made with Next.js, TypeScript and Material UI.",
        category: "frontend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/desafio-fullstack-redway-frontend",
        tags: ["next.js", "react", "typescript", "tailwind css", "react-hook-form", "toastify"]
    },
    {
        id: 8,
        title: "Redway Fullstack Challenge Backend",
        description: "The frontend of an expense manager app, made with Next.js, TypeScript and Material UI.",
        category: "backend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/desafio-fullstack-redway-frontend",
        tags: ["next.js", "typescript", "fastify", "docker compose", "postgresql", "prisma orm", "swagger", "zod"]
    },
    {
        id: 9,
        title: "VFlows Challenge",
        description: "The frontend of an expense manager app, made with Next.js, TypeScript and Material UI.",
        category: "frontend",
        image: ProjectImage,
        link: "",
        repository: "https://github.com/cedraz/desafio-frontend-vflows",
        tags: ["html", "css", "bootstrap", "javascript", "jquery"]
    },
    {
        id: 10,
        title: "Portfolio Next",
        description: "The frontend of an expense manager app, made with Next.js, TypeScript and Material UI.",
        category: "backend",
        image: ProjectImage,
        link: "",
        repository: "",
        tags: ["next.js", "react", "typescript", "atomic design", "tailwind css", "axios", "nodemailer"]
    }
]

export const socialMedia: socialMediaDataInterface = {
    name: "Ícaro Cedraz",
    linkedin: "https://www.linkedin.com/in/%C3%ADcaro-cedraz-63a389251/",
    github: "https://github.com/cedraz",
    email: "cedrazicaro12@gmail.com",
    repository: "https://github.com/cedraz/portfolio-next"
}