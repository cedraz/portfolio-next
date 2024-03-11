"use client"
import * as React from "react"
import Image from "next/image"

import ProfilePic from "@/assets/ProfilePic.png"

// Components
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Title from "../atoms/Title"
import { ContactCard } from "../organisms/ContactCard"

export function ContactMe() {

    return (
        <section id="contact">
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