/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // With parameter and custom status code
      {
        source: "/api/:slug*",
        destination: '/405',
      }
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
