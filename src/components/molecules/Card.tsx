"use client"
import * as React from "react"
import Image from "next/image"

import { useRouter } from "next/navigation"
import { projectDataInterface } from "@/@types/interfaces"
import Button from "../atoms/Button"
import Tag from "../atoms/Tag"
import { GitBranch, Link } from "@phosphor-icons/react"

export default function Card(project: projectDataInterface) {
    const className = `border-0
    before:h-full before:left-0 before:top-0 before:w-full before:absolute
    before:bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.1),transparent_40%)] relative
    before:opacity-0 transition-opacity duration-500 hover:before:opacity-100 border border-gray-200  shadow
    `

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e

        const rect = (target as HTMLElement).getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }

    const router = useRouter()
    const handleClick = (link: string) => {
        router.push(`/${link}`)
    }

    return (
        <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.5)] rounded-lg flex flex-col">
            <div className={className} key={project.id} onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(e)}>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="rounded-t-lg w-full"
                />
            </div>
            <div className="p-4 flex flex-col h-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                <Tag color="primary">
                    {project.category}
                </Tag>
                <p className="text-justify font-normal text-gray-400 mt-4">{project.description}</p>
                <div className="flex gap-3 mt-5 mb-7 flex-wrap">
                    {project.tags.map((tag, index) => (
                        <Tag key={index} color="secondary">
                            {tag}
                        </Tag>
                    ))}
                </div>
                <div className="mt-auto gap-3 xs:gap-0 flex flex-col xs:flex-row justify-between">
                    <Button variant="secondary" icon={(<GitBranch size={22} />)} onClick={() => handleClick(project.repository)}>
                        Github
                    </Button>
                    {project.link &&
                        (
                            <Button variant="primary" icon={(<Link size={22} />)} onClick={() => handleClick(project.link)}>
                                Abrir
                            </Button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}