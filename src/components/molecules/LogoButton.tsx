import * as React from "react"

// Components
import Logo from "../atoms/Logo"

export default function LogoButton() {
    return (
        <a href="#" className="flex items-center gap-x-3">
            <Logo />    
            <h1 className="text-2xl text-color-main">Cedraz</h1>
        </a>
    )
}