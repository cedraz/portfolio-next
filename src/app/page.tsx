import * as React from "react"

// Components
import Navbar from "@/components/templates/Navbar"
import FloatingButton from "@/components/templates/FloatingButton"
import Hero from "@/components/templates/Hero"
import Projects from "@/components/templates/Projects"
import Footer from "@/components/templates/Footer"

export default function Home() {

    return (
        <main className="bg-background-main h-full">
            <Navbar />
            <Hero />
            <FloatingButton />
            <Projects />
            <Footer />
        </main>
    )
}
