"use client"
import * as React from "react"

// Next
import Subtract from "../../../public/Subtract.svg"
import Image from "next/image"

export default function TextoBrilhante() {
    const className = `flex flex-wrap gap-2 max-w-[922px] bg-[rgba(255,255,255,0.4)]
    before:h-full before:left-0 before:top-0 before:w-full before:absolute  before:z-[2]
    before:bg-[radial-gradient(180px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.8),transparent_40%)] relative
    before:opacity-0 transition-opacity duration-500 hover:before:opacity-100`

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { currentTarget: target } = e

        const rect = (target as HTMLElement).getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top
        
        target.style.setProperty("--mouse-x", `${x}px`)
        target.style.setProperty("--mouse-y", `${y}px`)
    }

    return (
        <div onMouseMove={(e) => handleMouseMove(e)} className={className}>
            <Image className="z-[5]" src={Subtract} alt="Subtract" width={230} height={50} />
        </div>
    )
}
