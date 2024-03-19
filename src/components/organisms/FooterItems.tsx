import * as React from "react"
import FooterLink from "../atoms/FooterLink"

type link = {
    href: string
    title: string
}

interface FooterItemsProps {
    links: link[]
}

export default function FooterItems({ links }: FooterItemsProps) {
    return (
        <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                    {link.title}
                </FooterLink>
            ))}
        </ul>
    )
}