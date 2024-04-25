"use client"
import * as React from "react"

// Components
import { Education } from "../organisms/Education"
import { Experience } from "../organisms/Experience"
import Title from "../atoms/Title"

// next intl
import { useTranslations } from "next-intl"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

export function Journey() {
    const t = useTranslations("Journey")

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
            mirror: false
        })
    }, [])

    return (
        <section id="journey">
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title withMargin={true}>
                    {t("title")}
                </Title>
                <div className="flex flex-col gap-16 justify-between md:gap-5">
                    <div className="flex flex-col items-center flex-1" data-aos="fade-right">
                        <h1 className="text-2xl mb-4">{t("timeline1.title")}</h1>
                        <Experience />
                    </div>
                    <div className="flex flex-col items-center flex-1" data-aos="fade-left">
                        <h1 className="text-2xl mb-4">{t("timeline2.title")}</h1>
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    )
}