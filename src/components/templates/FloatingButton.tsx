"use client"
import * as React from "react"

// Phosphor Icons
import { ChatTeardropDots } from "@phosphor-icons/react"

export default function FloatingButton() {
    const handleClick = () => {
        window.open("https://wa.me/5571999440042", "_blank")
    }

    return (
        <div className="fixed border-[1px] border-[rgba(255,255,255,0.15)] bottom-8 
        right-8 flex bg-background-secondary rounded-full px-[13px] z-10
        h-16 items-center justify-center cursor-pointer group" onClick={handleClick}>
            <ChatTeardropDots className="w-9 h-9" color="#08ca08" />

            <span className="max-w-0 text-white overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                Whatsapp
            </span>
        </div>
    )
}