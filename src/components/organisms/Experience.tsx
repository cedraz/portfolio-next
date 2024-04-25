import * as React from "react"

// Components
import { Timeline, TimelineData } from "../molecules/Timeline"

// next intl
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { ExperienceCarousel } from "../molecules/ExperienceCarousel"

const Data1 = () => {
    const t = useTranslations("Journey.timeline1")
    
    return (
        <div className="flex flex-col">
            <p className="mt-3">
                {t("1.p")}
            </p>
        </div>
    )
}

const Data2 = () => {
    const t = useTranslations("Journey.timeline1")

    return (
        <div className="flex mt-5 flex-col lg:flex-row gap-3">
            {/* <div className="overflow-hidden">
                <Image 
                    src={TITAN}
                    alt="TITAN logo"
                    style={{
                        borderRadius: "0.75rem"
                    }}
                />
            </div> */}
            <ExperienceCarousel />
            <div className="flex flex-col gap-3 w-full lg:w-[30%]">
                <p className="mt-3">
                    {t("2.p")}
                </p>
                <Button className="w-fit mt-3" asChild>
                    <a href="https://linkedin.com/company/ufbatitan/mycompany/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </Button>
            </div>
            
        </div>
    )
}

export function Experience() {
    const t = useTranslations("Journey.timeline1")

    const timelineData: TimelineData[] = [
        {
            time:( t("1.time")),
            title: t("1.title"),
            children: (
                <Data1/>
            )
        },
        {
            time:( t("2.time")),
            title: t("2.title"),
            children: (
                <Data2/>
            )
        },
        {
            time:( t("3.time")),
            title: t("3.title"),
            children: (
                <>
                </>
            )
        }
    ]

    return (
        <Timeline data={timelineData}/>
    )
}