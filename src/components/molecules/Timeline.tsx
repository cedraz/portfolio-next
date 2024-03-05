import * as React from "react"

import { TimelineItem, TimelineItemProps } from "../atoms/TimelineItem"

export type TimelineData = Omit<TimelineItemProps, "order">;

interface TimelineProps {
    data: TimelineData[]
}

export function Timeline({data}: TimelineProps) {
    const getOrder = (index: number) => {
        if (index === data.length - 1) {
            return "initial"
        }

        if (index === 0) {
            return "final"
        }

        return null
    }

    return (
        <ol className="relative border-s border-white">    
            {data.map((item, index) => (
                <TimelineItem key={index} {...item} order={getOrder(index)} />
            ))} 
        </ol>
    )
}