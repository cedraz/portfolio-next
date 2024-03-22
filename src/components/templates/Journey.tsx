import * as React from "react"

import { Education } from "../organisms/Education"
import { Experience } from "../organisms/Experience"
import Title from "../atoms/Title"
import { useTranslations } from "next-intl"

export function Journey() {
    const t = useTranslations("Journey")

    return (
        <section id="journey">
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title withMargin={true}>
                    {t("title")}
                </Title>
                <div className="flex flex-col gap-16 justify-between md:gap-5">
                    <div className="flex flex-col items-center flex-1">
                        <h1 className="text-2xl mb-4">{t("timeline1.title")}</h1>
                        <Experience />
                    </div>
                    <div className="flex flex-col items-center flex-1">
                        <h1 className="text-2xl mb-4">{t("timeline2.title")}</h1>
                        <Education />
                    </div>
                </div>
            </div>
        </section>
    )
}