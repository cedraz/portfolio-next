import * as React from "react"

import ProfilePic from "@/assets/ProfilePic.png"

// Shadcn
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

export function ContactMe() {
    return (
        <section id="contact">
            <div className="grid mx-auto max-w-7xl px-6 py-8 lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image src={ProfilePic} alt="contact-me">

                    </Image>
                </div>
                <div className="lg:justify-self-end place-self-center sm:col-span-12 lg:col-span-7">
                    <Tabs defaultValue="account" className="w-full md:w-[480px]">
                        <TabsList className="grid grid-cols-2">
                            <TabsTrigger value="account">Email</TabsTrigger>
                            <TabsTrigger value="password">Whatsapp</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Account</CardTitle>
                                    <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="Pedro Duarte" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="username">Username</Label>
                                        <Input id="username" defaultValue="@peduarte" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card >
                                <CardHeader>
                                    <CardTitle>Password</CardTitle>
                                    <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                        <Label htmlFor="current">Current password</Label>
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-1">
                                        <Label htmlFor="new">New password</Label>
                                        <Input id="new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}