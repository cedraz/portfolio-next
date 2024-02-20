import * as React from "react"
import Title from "../atoms/Title"

export default function About() {
    return (
        <section className='h-full bg-background-secondary' id='about'>
            <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col items-center">
                <Title>Sobre</Title>
                <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                    <div className="lg:mr-auto place-self-center sm:col-span-12 lg:col-span-7">

                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">

                    </div>
                </div>
            </div>
        </section>
    )
}