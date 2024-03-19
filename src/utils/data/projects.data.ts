import { projectDataInterface, socialMediaDataInterface } from "@/@types/interfaces"

import ProjectImage from "@/assets/ProjectImage.png"
import VoiceoverPortfolio from "@/assets/VoiceoverPortfolio.png"
import ExpenseManager from "@/assets/ExpenseManager.svg"
import AxeNoticias from "@/assets/AxeNoticias.svg"

import { useTranslations } from "next-intl"

export function projectsObject() {
    const t = useTranslations("Projects")

    const projectsCategories: string[] = [t("all"), "frontend", "backend"]

    const projects: projectDataInterface[] = [
        {
            id: 1,
            title: t("1.title"),
            description: t("1.description"),
            category: "frontend",
            image: ExpenseManager,
            link: "https://gerenciadordedespesas.vercel.app/",
            repository: "https://github.com/cedraz/expense-manager-front",
            tags: ["next.js", "react", "typescript", "material-ui", "axios", "react-hook-form", "toastify"]
        },
        {
            id: 2,
            title: t("2.title"),
            description: t("2.description"),
            category: "backend",
            image: ExpenseManager,
            link: "",
            repository: "https://github.com/cedraz/expense-manager-back",
            tags: ["node", "typescript", "fastify", "docker", "prisma orm", "postgresql"]
        },
        {
            id: 3,
            title: t("3.title"),
            description: t("3.description"),
            category: "frontend",
            image: VoiceoverPortfolio,
            link: "https://locutorageovana.vercel.app/",
            repository: "https://github.com/cedraz/voiceover-portfolio",
            tags: ["next.js", "react", "typescript", "material-ui", "swiper", "emailjs"]
        },
        {
            id: 4,
            title: t("4.title"),
            description: t("4.description"),
            category: "backend",
            image: ProjectImage,
            link: "",
            repository: "https://github.com/cedraz/desafio-backend-picpay",
            tags: ["bun", "typescript", "elysia", "prisma orm", "postgresql", "aws rds", "zod", "axios"]
        },
        {
            id: 5,
            title: t("5.title"),
            description: t("5.description"),
            category: "frontend",
            image: AxeNoticias,
            link: "https://axenoticias.vercel.app/",
            repository: "https://github.com/cedraz/desafio-ptdev-front",
            tags: ["html", "css", "javascript"]
        },
        {
            id: 6,
            title: t("6.title"),
            description: t("6.description"),
            category: "backend",
            image: AxeNoticias,
            link: "",
            repository: "https://github.com/cedraz/desafio-ptdev-back",
            tags: ["strapi", "javascript", "postgresql", "cloudnary", "neondb"]
        },
        {
            id: 7,
            title: t("7.title"),
            description: t("7.description"),
            category: "frontend",
            image: ProjectImage,
            link: "",
            repository: "https://github.com/cedraz/desafio-fullstack-redway-frontend",
            tags: ["next.js", "react", "typescript", "tailwind css", "react-hook-form", "toastify"]
        },
        {
            id: 8,
            title: t("8.title"),
            description: t("8.description"),
            category: "backend",
            image: ProjectImage,
            link: "",
            repository: "https://github.com/cedraz/desafio-fullstack-redway-frontend",
            tags: ["next.js", "typescript", "fastify", "docker compose", "postgresql", "prisma orm", "swagger", "zod"]
        },
        {
            id: 9,
            title: t("9.title"),
            description: t("9.description"),
            category: "frontend",
            image: ProjectImage,
            link: "",
            repository: "https://github.com/cedraz/desafio-frontend-vflows",
            tags: ["html", "css", "bootstrap", "javascript", "jquery"]
        },
        {
            id: 10,
            title: t("10.title"),
            description: t("10.description"),
            category: "backend",
            image: ProjectImage,
            link: "",
            repository: "",
            tags: ["next.js", "react", "typescript", "atomic design", "tailwind css", "axios", "nodemailer"]
        }
    ]

    return {
        projects,
        projectsCategories
    }
}

export const socialMedia: socialMediaDataInterface = {
    name: "Ícaro Cedraz",
    linkedin: "https://www.linkedin.com/in/%C3%ADcaro-cedraz-63a389251/",
    github: "https://github.com/cedraz",
    email: "cedrazicaro12@gmail.com",
    repository: "https://github.com/cedraz/portfolio-next"
}