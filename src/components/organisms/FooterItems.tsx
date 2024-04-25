import * as React from "react"
import FooterLink from "../atoms/FooterLink"

// next intl
import { useTranslations } from "next-intl"

type link = {
    href: string
    title: string
}

export default function FooterItems() {
    const t = useTranslations("Footer")

    const links: link[] = [
        { href: "#", title: t("footerItems.home") },
        { href: "#about", title: t("footerItems.aboutMe") },
        { href: "#journey", title: t("footerItems.journey") },
        { href: "#projects", title: t("footerItems.projects") },
        { href: "#contact", title: t("footerItems.contactMe") },
    ]
    
    return (
        <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            {links.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                    {link.title}
                </FooterLink>
            ))}
        </ul>
    )
}