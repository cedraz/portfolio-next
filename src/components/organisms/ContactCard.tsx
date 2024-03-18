"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

// React Hook Form
import { useForm } from "react-hook-form"

// Zod
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

// Components
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Input } from "../ui/input"
import { toast } from "../ui/use-toast"

// Resend
import { SEND } from "@/app/api/send/route"

type ContactCardProps = {
    deliveryMethod: "email" | "whatsapp"
}

export function ContactCard({ deliveryMethod }: ContactCardProps) {
    const router = useRouter()

    let emailSchema: z.ZodString | z.ZodOptional<z.ZodString> = z.string().email({
        message: "You must provide a valid email address.",
    })
    
    if (deliveryMethod === "whatsapp") {
        emailSchema = emailSchema.optional()
    }

    const FormSchema = z.object({
        name: z
            .string()
            .min(3, {
                message: "Name must be at least 3 characters long.",
            })
            .max(40, {
                message: "Name must be at most 40 characters long.",
            }),
        email: emailSchema,
        category: z
            .enum(["work-oportunity", "partnership", "other"],
                {
                    required_error: "You must select at least one category.",
                }
            ),
        message: z
            .string()
            .min(5, {
                message: "Message must be at least 5 characters long.",
            })
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "", // Set an initial empty string
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        if (deliveryMethod === "email") {
            await SEND({...data})

            let message = data.message

            if (message.length >= 50) {
                message = message.slice(0, 50) + "..."
            }

            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-fit rounded-md bg-slate-950 p-4">
                        <code className="text-white overflow-hidden">{JSON.stringify({
                            name: data.name,
                            email: data.email,
                            category: data.category,
                            message: message,
                        }, null, 2)}</code>
                    </pre>
                ),
                duration: 50000,
            })
        }

        if (deliveryMethod === "whatsapp") {
            const message = `
Olá, me chamo ${data.name} e gostaria de falar com você.

Gostaria de propor uma ${data.category}.

${data.message}
            `

            router.push(`https://wa.me/5571999440042?text=${encodeURIComponent(message)}`)
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you&apos;re done.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className="flex-grow w-full">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="flex-grow w-full">
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="min-w-[180px]">
                                                    <SelectValue placeholder="Categoria" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="work-oportunity">Work Oportunity</SelectItem>
                                                <SelectItem value="partnership">Partnership</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            Qual o objetivo da sua mensagem?
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        { deliveryMethod === "email" && (
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-grow w-full sm:mt-5 lg:mt-0">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="cedraz@email.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="mt-5">
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            maxLength={590}
                                            placeholder="Tell us a little bit about yourself"
                                            className="min-h-[140px] max-h-[220px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        O que você deseja me comunicar?
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="mt-5" type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
