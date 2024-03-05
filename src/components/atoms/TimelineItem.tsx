import * as React from "react"

export type TimelineItemProps = {
    time: string
    title: string
    order: "final" | "initial" | null
    children: React.ReactNode
}

// ${order === "initial" ? "bg-black" : "bg-white "}

export function TimelineItem({ order, time, title, children} : TimelineItemProps) {
    return (
        <li className={`${order === "initial" ? "mb-0" : "mb-10"} ms-4`}>
            <div className={`
                absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white 
                ${order === "final" ? "bg-black" : "bg-white"}
            `}></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {time}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            {children}
        </li>
    )
}