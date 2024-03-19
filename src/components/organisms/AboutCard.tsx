import * as React from "react"
import Link from "next/link"

// Components
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Check } from "@phosphor-icons/react"

// next intl
import { useLocale, useTranslations } from "next-intl"

export function AboutCard() {
    const locale = useLocale()
    const t = useTranslations("AboutMe")

    const pdfPath = locale === "en" ? "CvEnglish.pdf" : "CvPortugues.pdf"

    return (
        <Card className="">
            <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                    <ul className="flex flex-wrap justify-center xl:justify-between gap-2">
                        <li className="flex flex-col items-center justify-center gap-2 rounded-lg border-white border py-5 px-9">
                            <Check size={24} />
                            <h2 className="font-bold">{t("card.li1.h2")}</h2>
                            <p className="text-gray-400">{t("card.li1.p")}</p>
                        </li>
                        <li className="flex flex-col items-center justify-center gap-1 rounded-lg border-white border py-5 px-9">
                            <Check size={24} />
                            <h2 className="font-bold">{t("card.li2.h2")}</h2>
                            <p className="text-gray-400">{t("card.li2.p")}</p>
                        </li>
                        <li className="flex flex-col items-center justify-center gap-1 rounded-lg border-white border py-5 px-9">
                            <Check size={24} />
                            <h2 className="font-bold">{t("card.li3.h2")}</h2>
                            <p className="text-gray-400">{t("card.li3.p")}</p>
                        </li>
                    </ul>
                    <p className="text-justify">
                        {t("card.p")}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" asChild>
                    <Link target="_blank" href={`/curriculumns/${pdfPath}`}>{t("card.button")}</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}