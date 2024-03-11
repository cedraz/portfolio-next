import * as React from "react"
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card"
import { Check } from "@phosphor-icons/react"
import { Button } from "../ui/button"

export function AboutCard() {
    return (
        <Card>
            <CardHeader>
                <h2 className="text-3xl font-bold text-center">Título de teste</h2>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3 max-w-[410px]">
                    <ul className="flex flex-wrap justify-center max-w-[650px] gap-2">
                        <li className="flex flex-col items-center justify-center gap-1 rounded-lg border-white border p-5">
                            <Check size={24} />
                            <h2 className="font-bold">Experience</h2>
                            <p className="text-gray-400">1+ years</p>
                        </li>
                        <li className="flex flex-col items-center justify-center gap-1 rounded-lg border-white border p-5">
                            <Check size={24} />
                            <h2 className="font-bold">Completed</h2>
                            <p className="text-gray-400">13+ projects</p>
                        </li>
                        <li className="flex flex-col items-center justify-center gap-1 rounded-lg border-white border p-5">
                            <Check size={24} />
                            <h2 className="font-bold">Experience</h2>
                            <p className="text-gray-400">2+ years</p>
                        </li>
                    </ul>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem mollitia hic 
                        alias ut voluptates illum architecto quasi tempora, quam vero nihil corrupti atque explicabo libero, 
                        iusto deleniti repudiandae? Explicabo, iusto.
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Currículo</Button>
            </CardFooter>
        </Card>
    )
}