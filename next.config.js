// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.suitdev.com", "suitmedia.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/ideas/:path*",
        destination: "https://suitmedia-backend.suitdev.com/api/ideas/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
