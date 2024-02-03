import * as React from "react"

export default function Button({ content }: { content: string }) {
    return (
        <button className="bg-[#414bd0] text-white w-100 px-4 py-2 rounded-md">{content}</button>
    )
}