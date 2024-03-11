import * as React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { notFound } from "next/navigation"
import { NextIntlClientProvider, useMessages } from "next-intl"

export const metadata = {
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
        <html lang={locale}>
            <body className={GeistSans.className}>
                <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
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
