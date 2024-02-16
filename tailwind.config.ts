import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background": {
                    "main": "#000000",
                    "secondary": "#111111"
                },
                "color": {
                    "main": "#FFFFFF",
                    "subtitle": "#a1a1a1",
                },
                "button-dark": {
                    "primary": "#0a0a0a",
                    "secondary": "#272727",
                    "border": "#5a5a5a"
                },
                "button-light": {
                    "primary": "#FFFFFF",
                    "secondary": "#cccccc",
                    "border": "#e1e1e1"
                }
            },
            screens: {
                "xs": "300px",
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "teste": "1150px",
                "xl": "1280px",
                "2xl": "1536px",
            }
        },
    },
    plugins: [],
}

export default config
