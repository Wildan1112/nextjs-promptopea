/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',

      }
    ]
  },

}

module.exports = nextConfig