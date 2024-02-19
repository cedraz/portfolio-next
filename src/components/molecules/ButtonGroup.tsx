"use client"
import * as React from "react"

// Next
import { useRouter } from "next/navigation"

// Components
import Button from "../atoms/Button"

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
            <Button variant="primary" onClick={() => handleClick("#a")}>
                Dashboard
            </Button>
            <Button variant="primary" onClick={() => handleClick("#")}>
                About me
            </Button>
            <Button variant="primary" onClick={() => handleClick("#")}>
                Skills
            </Button>
            <Button variant="primary" onClick={() => handleClick("#projects")}>
                Projects
            </Button>
        </div>
    )
}