/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
