"use client"
import * as React from "react"

// React type animation
import { TypeAnimation } from "react-type-animation"

// next intl
import { useTranslations } from "next-intl"

export default function TypingAnimation() {
    const t = useTranslations("Hero")

    const text1 = t("typingAnimation.1")
    const text2 = t("typingAnimation.2")
    const text3 = t("typingAnimation.3")

    return (
        <TypeAnimation
            sequence={[
                text1,
                4000,
                text2,
                4000,
                text3,
                5000
            ]}
            wrapper="span"
            speed={40}
            className="text-4xl md:text-5xl text-white font-bold"
            repeat={Infinity}
            preRenderFirstString={false}
        />
    )
}