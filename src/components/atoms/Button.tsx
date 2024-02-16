import * as React from "react"

interface ButtonProps {
    content: string
    variant: "primary" | "secondary" | "text"
    onClick: () => void
    icon?: React.ReactNode
}

export default function Button({ content, variant, onClick, icon }: ButtonProps) {
    const variants = {
        primary: "text-center inline-flex items-center font-medium text-white border delay-75 border-button-dark-border bg-button-dark-primary hover:bg-button-dark-secondary rounded-lg text-base px-[17px] h-10",
        secondary: "text-center inline-flex items-center font-medium text-black bg-button-light-primary border delay-75 hover:bg-button-light-secondary rounded-lg text-base h-10 px-[17px] ",
        text: "text-center inline-flex items-center font-medium text-color-subtitle bg-transparent delay-75 hover:text-white text-base h-10 px-[18px]"
    }

    const className = variants[variant]

    return (
        <button className={className} onClick={onClick}>
            {content}
            <span className="pl-2">{icon}</span>
        </button>
    )
}