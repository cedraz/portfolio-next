"use client"
import * as React from "react"

// Components
import { Button } from "../ui/button"
import ProjectsCardsGroup from "../organisms/ProjectsCardsGroup"

// Projects data
import { projects as projectsData, projectsCategories } from "../../utils/data/projects"
import { projectDataInterface } from "../../@types/interfaces"
import Title from "../atoms/Title"

export function Projects() {
    const [ projects, setProjects ] = React.useState<projectDataInterface[]>([])
    const [ active, setActive ] = React.useState(0)
    const [ category, setCategory ] = React.useState("all")
    const [ showAll, setShowAll ] = React.useState(false)
    const [ projectsNumber, setProjectsNumber ] = React.useState(0)

    React.useEffect(() => {
        if (category === "all") {
            if (showAll) {
                setProjects(projectsData)
                setProjectsNumber(projectsData.length)
            } else {
                setProjects(projectsData.slice(0, 3))
                setProjectsNumber(3)
            }

        } else {
            const filteredProjects = projectsData.filter((project: projectDataInterface) => {
                return project.category === category
            })

            if (showAll) {
                setProjects(filteredProjects)
                setProjectsNumber(filteredProjects.length)
            } else {
                setProjects(filteredProjects.slice(0, 3))
                setProjectsNumber(3)
            }

            
        }
    }, [category, showAll])

    const handleClickCategory = ({ index, category }: { index: number, category: string }) => {
        setActive(index)
        setCategory(category)
        setShowAll(false)
    }

    return (
        <section className="bg-background-default h-full" id="projects">
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title withMargin={true}>Projects</Title>
                <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                    {projectsCategories.map((category, index) => (
                        <Button
                            key={index}
                            variant={active === index ? "default" : null}
                            onClick={() => handleClickCategory({ index, category })}
                        >
                            {category}
                            {active === index ? (" " + projectsNumber + "/" + projectsData.length) : "" }
                        </Button>
                    ))}
                </div>
                <ProjectsCardsGroup projects={projects} />
                <Button 
                    onClick={() => setShowAll(!showAll)}
                    variant="default" 
                    style={{marginTop: "30px"}}
                >
                    {showAll ? "Show less" : "Show more"}
                </Button>
            </div>
        </section>
    )
}