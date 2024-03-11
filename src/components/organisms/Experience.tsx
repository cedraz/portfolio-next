import * as React from "react"
import Image from "next/image"
import TITAN from "@/assets/TITAN.png"

// Components
import { Timeline, TimelineData } from "../molecules/Timeline"

// next intl
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"

const Data1 = () => {

    const t = useTranslations("Journey")

    return (
        <div className="flex flex-col mt-5">
            <div className="rounded-xl overflow-hidden">
                <Image 
                    src={TITAN}
                    alt="TITAN logo"
                />
            </div>
            <div className="flex flex-col gap-3">
                <p className="mt-3 text-justify">
                    {t("1.p")}
                </p>
                <Button className="w-fit">
                    Linkedin
                </Button>
            </div>
        </div>
    )
}



export function Experience() {
    const t = useTranslations("Journey")

    const timelineData: TimelineData[] = [
        {
            time:( t("1.time")),
            title: t("1.title"),
            children: (
                <p>
                    I am currently working as a full-stack developer at a company called Company Name. I am 
                    responsible for developing and maintaining the companys website, as well as developing new 
                    features for the companys internal tools.
                </p>
            )
        },
        {
            time:( t("2.time")),
            title: t("2.title"),
            children: (
                <Data1/>
            )
        },
        {
            time:( t("3.time")),
            title: t("3.title"),
            children: (
                <p>
                    I worked as a back-end developer at a company called Company Name. I was responsible for developing and 
                    maintaining the companys website, as well as developing new features for the companys internal tools.
                </p>
            )
        }
    ]

    return (
        <Timeline data={timelineData}/>
    )
}