"use client"
import * as React from "react"

// Components
import GlowingText from "@/components/organisms/GlowingText"
import FooterItems from "../organisms/FooterItems"

const links = [
    { link: "#", title: "Home" },
    { link: "#", title: "About me" },
    { link: "#", title: "Projects" },
    { link: "#", title: "Contact me" },
]

export default function Footer() {
    return (
        <footer className="bg-background-secondary shadow">
            <div className="w-full max-w-7xl mx-auto px-6 p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex justify-center sm:justify-start items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <GlowingText />
                    </a>
                    <FooterItems links={links}/>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/cedraz" className="underline hover:text-white">Cedraz</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}