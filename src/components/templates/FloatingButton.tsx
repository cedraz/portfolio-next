"use client"
import * as React from "react"

// Phosphor Icons
import { ChatTeardropDots } from "@phosphor-icons/react"

export function FloatingButton() {
    const handleClick = () => {
        window.open("https://wa.me/5571999440042", "_blank")
    }

    return (
        <div className="fixed border-[1px] border-[rgba(255,255,255,0.15)] xs:bottom-[20px] md:bottom-[40px]
        xs:right-[20px] md:right-[40px] flex bg-background-secondary rounded-full px-[13px] z-10
        xs:h-[56px] md:h-[68px] items-center justify-center cursor-pointer group" onClick={handleClick}>
            <ChatTeardropDots className="xs:w-7 xs:h-7 md:w-10 md:h-10" color="#08ca08" />

            <span className="max-w-0 text-white overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                Whatsapp
            </span>
        </div>
    )
}