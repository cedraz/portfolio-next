"use client"
import * as React from "react"

// Components
import { Button } from "../ui/button"
import ProjectsCardsGroup from "../organisms/ProjectsCardsGroup"
import Title from "../atoms/Title"

// Projects data
import { projectsObject } from "../../utils/data/projects.data"
import { projectDataInterface } from "../../@types/interfaces"

// next intl
import { useTranslations } from "next-intl"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

export function Projects() {
    const t = useTranslations("Projects")

    const sectionRef = React.useRef(null)

    const [ activeProjects, setActiveProjects] = React.useState<projectDataInterface[]>([])
    const [ active, setActive ] = React.useState(0)
    const [ category, setCategory ] = React.useState(t("all"))
    const [ showAll, setShowAll ] = React.useState(false)
    const [ projectsNumber, setProjectsNumber ] = React.useState(0)
    const [ projectsTotalNumber, setProjectsTotalNumber ] = React.useState(0)

    const projectsDataObject = projectsObject()
    const projectsData = projectsDataObject.projects
    const projectsCategories = projectsDataObject.projectsCategories

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
            mirror: false
        })
    }, [])

    React.useEffect(() => {
        const filteredProjects = category === t("all")
            ? projectsData 
            : projectsData.filter(project => project.category === category)

        const projectsToShow = showAll ? filteredProjects : filteredProjects.slice(0, 3)

        setActiveProjects(projectsToShow)
        setProjectsNumber(projectsToShow.length)
        setProjectsTotalNumber(filteredProjects.length)
    }, [category, showAll])

    const handleClickCategory = ({ index, category }: { index: number, category: string }) => {
        setActive(index)
        setCategory(category)
    }

    const handleChangeShowAll = () => {
        setShowAll(!showAll)

        if (showAll) {
            if (sectionRef.current) {
                const sectionOffsetTop = (sectionRef.current as HTMLElement).offsetTop
                window.scrollTo({
                    top: sectionOffsetTop,
                    behavior: "smooth"
                })
            }
        }
    }

    return (
        <section ref={sectionRef} className="bg-background-secondary h-full" id="projects">
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title withMargin={true}>
                    { t("h1")}
                </Title>
                <div className="flex flex-row flex-wrap gap-3 items-center justify-center">
                    {projectsCategories.map((category, index) => (
                        <Button
                            key={index}
                            variant={active === index ? "default" : null}
                            onClick={() => handleClickCategory({ index, category })}
                        >
                            {category}
                            {active === index ? (" " + projectsNumber + "/" + projectsTotalNumber) : "" }
                        </Button>
                    ))}
                </div>
                <ProjectsCardsGroup projects={activeProjects} />
                <Button 
                    onClick={handleChangeShowAll}
                    variant="default" 
                    style={{marginTop: "30px"}}
                >
                    {showAll ? t("buttonShowLess") : t("buttonShowMore")}
                </Button>
            </div>
        </section>
    )
}