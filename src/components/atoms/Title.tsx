import * as React from "react"

export type TitleProps = React.ComponentProps<"h1">

export default function Title(props: TitleProps) {

    return (
        <h1 className="text-4xl font-bold text-white mb-9" {...props}></h1>
    )
}