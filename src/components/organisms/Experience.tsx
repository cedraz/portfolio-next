import * as React from "react"

// Components
import { Timeline, TimelineData } from "../molecules/Timeline"

const timelineData: TimelineData[] = [
    {
        time: "January 2024 - Present",
        title: "Backend Manager at TITAN ci",
        children: (
            <p>
                I am currently working as a full-stack developer at a company called Company Name. I am 
                responsible for developing and maintaining the companys website, as well as developing new 
                features for the companys internal tools.
            </p>
        )
    },
    {
        time: "September 2023 - January 2024",
        title: "Full stack developer at TITAN ci",
        children: (
            <p>
                I worked as a front-end developer at a company called Company Name. I was responsible for developing 
                and maintaining the companys website, as well as developing new features for the companys internal tools.
            </p>
        )
    },
    {
        time: "May 2023 - September 2023",
        title: "Trainee in development board of TITAN ci",
        children: (
            <p>
                I worked as a back-end developer at a company called Company Name. I was responsible for developing and 
                maintaining the companys website, as well as developing new features for the companys internal tools.
            </p>
        )
    }
]

export function Experience() {
    return (
        <Timeline data={timelineData}/>
    )
}