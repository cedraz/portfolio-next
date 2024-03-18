"use server"
import * as React from "react"
import { EmailTemplate } from "@/components/email-template/email-template"
import { Resend } from "resend"

type SendEmailProps = {
    name: string
    email?: string
    category: string
    message: string
}

export async function SEND({ name, email, category, message }: SendEmailProps) {
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const resend = new Resend(RESEND_API_KEY)

    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: `${process.env.EMAIL_TO}`,
            subject: "Email from the portfolio",
            react: EmailTemplate({ name, email, category, message }) as React.ReactElement,
        })

        if (error) {
            return { error }
        }

        return { data }
    } catch (error) {
        return { error }
    }
}