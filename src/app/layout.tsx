import * as React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"

export const metadata = {
    title: "Portfolio",
    description: "Icaro Cedraz's portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    )
}
