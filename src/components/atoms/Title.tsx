import * as React from "react"

export type TitleProps = React.ComponentProps<"h1"> & {
    withMargin: boolean
}

export default function Title({withMargin, ...props}: TitleProps) {

    return (
        <h2 className={`text-[33px] font-semibold tracking-tight text-white ${withMargin ? "mb-16" : "mb-0"}`} {...props}/>
    )
}