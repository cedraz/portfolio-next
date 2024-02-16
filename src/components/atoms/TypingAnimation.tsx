"use client"
import * as React from "react"

// React type animation
import { TypeAnimation } from "react-type-animation"

export default function TypingAnimation() {
    return (
        <TypeAnimation
            sequence={[
                "Full-stack developer",
                2000,
                "Front-end Developer",
                2000,
                "Back-end Developer",
                4000
            ]}
            wrapper="span"
            speed={50}
            className="xs:text-4xl md:text-6xl text-white font-bold"
            repeat={Infinity}
        />
    )
}