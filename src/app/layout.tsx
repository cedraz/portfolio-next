import * as React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
    title: "Cedraz",
    description: "Icaro Cedraz's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    {children}  
                </ThemeProvider>
            </body>
        </html>
    )
}
