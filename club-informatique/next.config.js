/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/contacts': { page: '/contacts' },
            '/news': { page: '/news' },
            '/projects': { page: '/projects' },
        }
    },
}

module.exports = nextConfig
