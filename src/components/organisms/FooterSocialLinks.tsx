import * as React from "react"

import { socialMedia } from "@/utils/data/projects.data"

import FooterLink from "../atoms/FooterLink"
import { toast } from "../ui/use-toast"
import { GitBranch, GithubLogo, LinkedinLogo, EnvelopeSimple, Copy } from "@phosphor-icons/react"

// next intl
import { useTranslations } from "next-intl"

export function FooterSocialLinks() {
    const t = useTranslations("Footer")

    const [ copied, setCopied ] = React.useState(false)

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    return (
        <ul className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <FooterLink target="_blank" rel="noreferrer" href={socialMedia.github}>
                <GithubLogo size={22} />
                Github
            </FooterLink>
            <FooterLink target="_blank" rel="noreferrer" href={socialMedia.linkedin}>
                <LinkedinLogo size={22} />
                Linkedin
            </FooterLink>
            <FooterLink target="_blank" rel="noreferrer" href={socialMedia.repository}>
                <GitBranch size={22} />
                {t("footerSocialLinks.repository")}
            </FooterLink>
            <FooterLink className="cursor-pointer hover:underline flex items-center gap-1" onClick={() => {
                copyToClipboard(socialMedia.email)
                
                toast({
                    title: t("copyToClipboard"),
                    duration: 4000,
                })

                setTimeout(() => {
                    setCopied(false)
                }, 4000)
            }}>
                {copied ? <EnvelopeSimple size={22} /> : <Copy size={22} />}
                
                Email
            </FooterLink>
        </ul>
    )
}