"use client"
import * as React from "react"

// Next
import { useRouter } from "next/navigation"

// Components
import { Button } from "../ui/button"

interface ButtonGroupProps {
    direction: "row" | "col"
}

// next intl
import { useTranslations } from "next-intl"

export default function ButtonGroup({ direction }: ButtonGroupProps) {
    const router = useRouter()
    const handleClick = (link: string) => {
        router.push(`/${link}`)
    }
    const t = useTranslations("Navbar")

    return (
        <div className={`flex gap-5 items-center flex-${direction}`}>
            <Button variant="outline" className="w-fit" onClick={() => handleClick("#about")}>
                {t("aboutMe")}
            </Button>
            <Button variant="outline" className="w-fit" onClick={() => handleClick("#journey")}>
                {t("journey")}
            </Button>
            <Button variant="outline" className="w-fit" onClick={() => handleClick("#projects")}>
                {t("projects")}
            </Button>
        </div>
    )
}