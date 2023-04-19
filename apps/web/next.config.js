/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['shared-ui', 'shared-lib'],
  trailingSlash: true,
};

module.exports = nextConfig;