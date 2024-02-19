import * as React from "react"

export type TagsProps = React.ComponentProps<"span"> & {
    color: "primary" | "secondary"
}

export default function Tag(props : TagsProps) {
    const colors = {
        primary: "bg-[#ffffff] text-black",
        secondary: "bg-[#2e2e2e] text-white"
    }

    return (
        <span {...props} className={`text-xs rounded-md px-2 py-1 ${colors[props.color]} max-w-fit`}>

        </span>
    )
}
