import * as React from "react"

interface FooterLinkProps {
    link: string
    title: string
}

export default function FooterLink({ link, title }: FooterLinkProps) {
    return (
        <li>
            <a href={link} className="hover:underline">{title}</a>
        </li>
    )
}