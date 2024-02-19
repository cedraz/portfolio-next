"use client"
import * as React from "react"

// Components
import Button from "../atoms/Button"
import ProjectsCardsGroup from "../organisms/ProjectsCardsGroup"

// Projects data
import { projects as projectsData, projectsCategories } from "../../utils/data/data"
import { projectDataInterface } from "../../@types/interfaces"

export default function Projects() {
    const [projects, setProjects] = React.useState<projectDataInterface[]>([])
    const [active, setActive] = React.useState(0)
    const [category, setCategory] = React.useState("all")
    const [ showAll, setShowAll ] = React.useState(false)

    React.useEffect(() => {
        if (category === "all") {
            if (showAll) {
                setProjects(projectsData)
            } else {
                setProjects(projectsData.slice(0, 3))
            }
        } else {
            const filteredProjects = projectsData.filter((project: projectDataInterface) => {
                return project.category === category
            })

            if (showAll) {
                setProjects(filteredProjects)
            } else {
                setProjects(filteredProjects.slice(0, 3))
            }
        }
    }, [category, showAll])

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
                            variant={active === index ? "secondary" : "text"}
                            onClick={() => handleClickCategory({ index, category })}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <ProjectsCardsGroup projects={projects} />
                <Button 
                    onClick={() => setShowAll(!showAll)}
                    variant="primary" 
                    style={{marginTop: "30px"}}
                >
                    {showAll ? "Show less" : "Show more"}
                </Button>
            </div>
        </section>
    )
}