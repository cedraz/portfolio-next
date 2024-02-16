"use client"
import * as React from "react"

// Components
import Title from "../atoms/Title"

// Projects data
import { projectDataInterface } from "../../@types/interfaces"
import { projects as projectsData, projectsCategories } from "../../utils/data/data"
import Button from "../atoms/Button"
import CardsGroup from "../organisms/CardsGroup"

export default function Projects() {
    const [projects, setProjects] = React.useState<projectDataInterface[]>([])
    const [active, setActive] = React.useState(0)
    const [category, setCategory] = React.useState("all")

    React.useEffect(() => {
        if (category === "all") {
            setProjects(projectsData)
        } else {
            const filteredProjects = projectsData.filter((project: projectDataInterface) => {
                return project.category === category
            })

            setProjects(filteredProjects)
        }
    }, [category])

    const handleClickCategory = ({ index, category }: { index: number, category: string }) => {
        setActive(index)
        setCategory(category)
    }

    return (
        <section className="bg-background-secondary h-full" id="projects">
            <div className="mx-auto max-w-7xl px-6 py-16 text-white flex flex-col items-center">
                <h1 className="text-4xl font-bold text-center mb-10">Projetos</h1>
                <div className="flex flex-row flex-wrap gap-5 items-center  justify-center">
                    {projectsCategories.map((category, index) => (
                        <Button
                            key={index}
                            content={category}
                            variant={active === index ? "secondary" : "text"}
                            onClick={() => handleClickCategory({ category, index })}
                        />
                    ))}
                </div>
                <CardsGroup projects={projects} />
            </div>
        </section>
    )
}