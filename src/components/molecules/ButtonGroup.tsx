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
            <Button content="Dashboard" variant="primary" onClick={() => handleClick("#a")} />
            <Button content="About me" variant="primary" onClick={() => handleClick("#")} />
            <Button content="Skills" variant="primary" onClick={() => handleClick("#")} />
            <Button content="Projects" variant="primary" onClick={() => handleClick("#projects")} />
        </div>
    )
}