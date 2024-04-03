/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedForwardedHosts: ["localhost", "friendly-space-tribble-vw99579q5cx96w-3000.app.github.dev"],
            allowedOrigins: ['friendly-space-tribble-vw99579q5cx96w-3000.app.github.dev', 'localhost:3000'],
        }
    }
};

module.exports = nextConfig;
