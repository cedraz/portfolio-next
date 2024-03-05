import * as React from "react"

import { Education } from "../organisms/Education"
import { Experience } from "../organisms/Experience"
import Title from "../atoms/Title"

export function Journey() {
    return (
        <section id="journey">
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title withMargin={true}>
                    Journey
                </Title>
                <div className="flex justify-between gap-3">
                    <div className="flex flex-col items-center">
                        <h1>Experience</h1>
                        <Experience />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1>Education</h1>
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    )
}