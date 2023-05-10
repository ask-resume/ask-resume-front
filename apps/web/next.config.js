const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['shared-ui', 'shared-lib'],
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/_next/data/:hash/:locale/:namespace.json',
        destination: '/api/v1/:namespace',
      },
    ];
  },
});

module.exports = nextConfig;
