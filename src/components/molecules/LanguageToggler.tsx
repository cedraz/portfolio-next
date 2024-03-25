import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Translate } from "@phosphor-icons/react"
import { Button } from "../ui/button"
import { useRouter, usePathname } from "../../../navigation"

export function LanguageToggler() {
    const router = useRouter()
    const pathname = usePathname()
    
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                    <Translate size={20} />
                    <span className="sr-only">Toggle Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push(pathname, { locale: "en" })}>
                    English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(pathname, { locale: "pt" })}>
                    Português
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}