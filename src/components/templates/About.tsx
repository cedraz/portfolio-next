"use client"
import * as React from "react"
import Image from "next/image"

import ProfilePic from "@/assets/ProfilePic.png"

// Components
import Title from "../atoms/Title"
import { AboutCard } from "../organisms/AboutCard"

export function About() {

    return (
        <section id="about">
            <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div className="col-span-12 place-self-center">
                    <Title withMargin={true}>
                        Contact me
                    </Title>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-6 lg:flex max-w-[500px] h-fit">
                    <Image src={ProfilePic} alt="contact-me"/>
                </div>
                <div className="lg:justify-self-end place-self-center col-span-12 lg:col-span-6 min-h-[560px]">
                    <AboutCard />
                </div>
            </div>
        </section>
    )
}