import * as React from "react"

// Components
import { Timeline, TimelineData } from "../molecules/Timeline"

const timelineData: TimelineData[] = [
    {
        time: "August 2022 - Present",
        title: "Computer Engineering at Federal University of Bahia (UFBA)",
        children: (
            <p>
                I am currently working as a full-stack developer at a company called Company Name. I am responsible for developing and maintaining the companys website, as well as developing new features for the companys internal tools.
            </p>
        )
    },
    {
        time: "January 2019 - December 2021",
        title: "High school at Colégio Oficina",
        children: (
            <p>
                I worked as a front-end developer at a company called Company Name. I was responsible for developing and maintaining the companys website, as well as developing new features for the companys internal tools.
            </p>
        )
    }
]

export function Education() {
    return (
        <Timeline data={timelineData}/>
    )
}