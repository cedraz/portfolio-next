"use client"
import * as React from "react"

// Next
import { useRouter } from "next/navigation"

// Components
import { Button } from "../ui/button"

interface ButtonGroupProps {
    direction: "row" | "col"
}

export default function ButtonGroup({ direction }: ButtonGroupProps) {
    const router = useRouter()
    const handleClick = (link: string) => {
        router.push(`/${link}`)
    }

    return (
        <div className={`flex gap-5 flex-${direction}`}>
            <Button variant="outline" onClick={() => handleClick("#about")}>
                About me
            </Button>
            <Button variant="outline" onClick={() => handleClick("#journey")}>
                Skills
            </Button>
            <Button variant="outline" onClick={() => handleClick("#projects")}>
                Projects
            </Button>
        </div>
    )
}