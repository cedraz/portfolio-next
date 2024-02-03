import * as React from "react"
import "./globals.css"

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
            <body className="">{children}</body>
        </html>
    )
}
