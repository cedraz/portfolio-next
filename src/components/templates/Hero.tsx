"use client"
import * as React from "react"

// Next
import ProfilePic from "@/assets/ProfilePic.png"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Components
import TypingAnimation from "../atoms/TypingAnimation"
import { Button } from "../ui/button"

// next intl
import { useTranslations } from "next-intl"

export function Hero() {
    const router = useRouter()
    const t = useTranslations("Hero")

    return (
        <section className="bg-background-main">
            <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div className="lg:mr-auto place-self-center sm:col-span-12 lg:col-span-7">
                    <h1 className="max-w-2xl text-4xl text-center lg:text-start mb-2 font-extrabold tracking-tight leading-none md:text-5xl text-color-subtitle">
                        {t("h1")}
                    </h1>
                    <div className="min-h-[81px] sm:min-h-[41px] lg:min-h-[100px] teste:min-h-[55px] xl:min-h-[120px] text-center lg:text-start">
                        <TypingAnimation />
                    </div>
                    <div className="mr-auto mt-5 text-center lg:text-start">
                        <Button onClick={() => router.push("#contact")} >
                            {t("button")}
                        </Button>
                    </div>
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={ProfilePic} width={700} height={700} alt="profile-pic" />
                </div>
            </div>
        </section>
    )
}