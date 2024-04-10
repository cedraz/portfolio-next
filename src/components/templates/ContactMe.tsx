"use client"
import * as React from "react"
import Image from "next/image"

// import Iphone from "@/assets/iphone.png"
import macbook from "@/assets/macbook.png"

// Components
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Title from "../atoms/Title"
import { ContactCard } from "../organisms/ContactCard"

// next intl
import { useTranslations } from "next-intl"

// AOS
import AOS from "aos"
import "aos/dist/aos.css"

export function ContactMe() {
    const t = useTranslations("ContactMe")

    // React.useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         easing: "ease-in-out",
    //         once: false,
    //         mirror: false
    //     })
    // })

    return (
        <section id="contact">
            <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div className="col-span-12 place-self-center">
                    <Title withMargin={true}>
                        {t("h1")}
                    </Title>
                </div>
                <div className="hidden place-self-center lg:mt-0 lg:col-span-6 lg:flex max-w-[500px] h-fit" >
                    <Image src={macbook} alt="contact-me"/>
                </div>
                <div className="flex flex-col items-end justify-center col-span-12 lg:col-span-6 min-h-[736px]" >
                    <Tabs defaultValue="email" className="w-full teste:w-[550px]">
                        <TabsList className="grid grid-cols-2">
                            <TabsTrigger value="email">Email</TabsTrigger>
                            <TabsTrigger value="whatsapp">Whatsapp</TabsTrigger>
                        </TabsList>
                        <TabsContent value="email">
                            <ContactCard deliveryMethod="email" />
                        </TabsContent>
                        <TabsContent value="whatsapp">
                            <ContactCard deliveryMethod="whatsapp" />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}