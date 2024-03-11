"use client"
import * as React from "react"

// Next
import { useRouter } from "next/navigation"

// Components
import NavbarItems from "../organisms/NavbarItems"
import NavbarMenu from "../organisms/NavbarMenu"
import LogoButton from "../molecules/LogoButton"

// Hooks
import { useMediaQuery } from "@/hooks/use-media-query"
import { LanguageToggler } from "../molecules/LanguageToggler"

export function Navbar() {
    const router = useRouter()

    const handleClick = (link: string) => {
        router.push(link)
    }
    
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) return (
        <nav className="bg-transparent border-b-2 border-button-dark-secondary">
            <div className="mx-auto max-w-7xl px-6 py-1">
                <div className="relative flex h-16 items-center justify-between">
                    <NavbarItems handleClick={handleClick} />
                </div>
            </div>
        </nav>
    )

    return (
        <nav className="bg-transparent border-b-2 border-button-dark-secondary">
            <div className="mx-auto max-w-7xl px-6 py-1">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden cursor-pointer">
                        <NavbarMenu handleClick={handleClick} />
                    </div>

                    <div className="flex flex-1 items-center justify-center md:justify-start">
                        <LogoButton />
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                        <LanguageToggler />
                    </div>
                </div>
            </div>
        </nav>
    )
}