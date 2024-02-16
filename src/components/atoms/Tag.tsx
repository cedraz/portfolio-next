import * as React from "react"

interface TagsProps {
    content: string
}

export default function Tag({ content }: TagsProps) {
    return (
        <span className="text-xs bg-[rgba(255,255,255,0.1)] text-white rounded-md px-2 py-1">{content}</span>
    )
}