import * as React from "react"

// Components
import Button from "../atoms/Button"
import ButtonGroup from "../molecules/ButtonGroup"
import LogoButton from "../molecules/LogoButton"

interface NavbarItemsProps {
    handleClick: (link: string) => void
}

export default function NavbarItems({ handleClick }: NavbarItemsProps) {
    return (
        <>
            <div className="flex flex-1 items-center justify-center md:justify-start">
                <LogoButton />
            </div>

            <div className="hidden md:flex md:items-center md:justify-center">
                <ButtonGroup direction="row"/>
            </div>

            <div className="hidden md:flex flex-1 items-center justify-end ">
                <Button content="Contact me" variant="secondary" onClick={() => handleClick("teste")} />
            </div>
        </>
    )
}