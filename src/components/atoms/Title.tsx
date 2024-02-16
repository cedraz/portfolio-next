import * as React from "react"

interface TitleProps {
    content: string
}

export default function Title({ content }: TitleProps) {

    return (
        <h1 className="text-xl text-color-main">{content}</h1>
    )
}