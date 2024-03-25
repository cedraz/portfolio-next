import * as React from "react"

// Components
import { Navbar } from "@/components/templates/Navbar"
import { FloatingButton } from "@/components/templates/FloatingButton"
import { Hero } from "@/components/templates/Hero"
import { Projects } from "@/components/templates/Projects"
import { Footer } from "@/components/templates/Footer"
import { About } from "@/components/templates/About"
import { Journey } from "@/components/templates/Journey"
import { ContactMe } from "@/components/templates/ContactMe"

export default function Home() {
    return (
        <main className="bg-black h-full">
            <Navbar />
            <Hero />
            <FloatingButton />
            <About />
            <Journey />
            <Projects />
            <ContactMe />
            <Footer />
        </main>
    )
}
