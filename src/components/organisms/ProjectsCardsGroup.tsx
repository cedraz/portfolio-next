"use client"
import * as React from "react"

import { projectDataInterface } from "@/@types/interfaces"

// Components
import Card from "@/components/molecules/Card"

export default function CardsGroup({ projects }: { projects: projectDataInterface[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {projects.map((project: projectDataInterface) => (
                <Card key={project.id} {...project}/>
            ))}
        </div>
    )
}