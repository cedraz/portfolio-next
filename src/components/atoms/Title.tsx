import * as React from "react"

export type TitleProps = React.ComponentProps<"h1"> & {
    withMargin: boolean
    children: React.ReactNode
}

export default function Title({children, withMargin, ...props}: TitleProps) {

    return (
        <h2 className={`text-[33px] font-semibold tracking-tight text-white ${withMargin ? "mb-14" : "mb-0"}`} {...props}>
            {children}
        </h2>
    )
}