import * as React from "react"

// Components
import { Button } from "../ui/button"
import ButtonGroup from "../molecules/ButtonGroup"

interface MenuProps {
    open: boolean
    handleClick: (link: string) => void
}

export default function Menu({ open, handleClick }: MenuProps) {
    return (
        <>
            {open && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="flex flex-col px-2 pb-3 pt-2 gap-y-5">
                        <ButtonGroup direction="col"/>
                        <Button variant="secondary" onClick={() => handleClick("teste")}>
                            Contact me
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}