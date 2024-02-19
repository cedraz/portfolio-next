import * as React from "react"

export type ButtonProps = React.ComponentProps<"button"> & {
    variant: "primary" | "secondary" | "text"
    icon?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const variants = {
        primary: "text-center inline-flex items-center font-medium text-white border delay-75 border-button-dark-border bg-button-dark-primary hover:bg-button-dark-secondary rounded-lg text-base px-[17px] h-10 max-w-fit",
        secondary: "text-center inline-flex items-center font-medium text-black bg-button-light-primary border delay-75 hover:bg-button-light-secondary rounded-lg text-base h-10 px-[17px] max-w-fit",
        text: "text-center inline-flex items-center font-medium text-color-subtitle bg-transparent delay-75 hover:text-white text-base h-10 px-[18px] max-w-fit"
    }

    const className = variants[props.variant]

    return (
        <button className={className} {...props}>
            {props.children}
            {props.icon && <span className="ml-2">{props.icon}</span>}
        </button>
    )
}