import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/:locale(pt|en)/api/:path*",
                destination: "/api/:path*",
            },
            {
                source: "/api/:path*",
                destination: "/src/api/:path*", // Proxy to Backend
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

export default withNextIntl(nextConfig)