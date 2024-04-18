"use client"
import * as React from "react"
import Image from "next/image"

import ProfilePic from "@/assets/ProfilePic.png"

// Components
import Title from "../atoms/Title"
import { AboutCard } from "../organisms/AboutCard"

// next intl
import { useTranslations } from "next-intl"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

export function About() {
    const t = useTranslations("AboutMe")

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: false,
            mirror: false
        })
    }, [])

    return (
        <section className="bg-background-secondary" id="about">
            <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div className="col-span-12 place-self-center">
                    <Title withMargin={true}>
                        {t("h1")}
                    </Title>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-6 align-self-center lg:flex max-w-[500px] h-fit" >
                    <Image src={ProfilePic} alt="contact-me"/>
                </div>
                <div className="lg:justify-self-end place-self-center col-span-12 lg:col-span-6" >
                    <AboutCard />
                </div>
            </div>
        </section>
    )
}