import * as React from "react"

// Components
import { Button } from "../ui/button"
import ButtonGroup from "../molecules/ButtonGroup"
import { List } from "@phosphor-icons/react"
import { DrawerTrigger, DrawerContent, Drawer } from "../ui/drawer"

// next intl
import { useTranslations } from "next-intl"

interface NavbarMenuProps {
    handleClick: (link: string) => void
}

export default function NavbarMenu({handleClick}: NavbarMenuProps) {
    const t = useTranslations("Navbar")

    return (
        <>
            <Drawer>
                <DrawerTrigger>
                    <List size={25} />
                </DrawerTrigger>
                <DrawerContent>
                    <div className="my-4 flex flex-col items-center gap-5">
                        <ButtonGroup direction="col"/>
                        <Button onClick={() => handleClick("teste")}>
                            {t("contactMe")}
                        </Button>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}