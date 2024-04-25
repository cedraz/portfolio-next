import * as React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cedraz",
    description: "Icaro Cedraz's portfolio",
}

const locales = ["pt", "en"]

export default function RootLayout({
    children,
    params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
    
    if (!locales.includes(locale)) {
        notFound()
    }

    const messages = useMessages()

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <link rel="icon" href="./favicon.ico" />
            </head>
            <body className={GeistSans.className}>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange
                    >
                        {children}  
                    </ThemeProvider>

                    <Toaster />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
