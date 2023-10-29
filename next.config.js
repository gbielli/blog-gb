/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/blog/matomo',
            destination: '/blog',
            permanent: true,
          },
        ]
      }
}

module.exports = nextConfig
