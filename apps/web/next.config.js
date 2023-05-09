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
        source: '/v1/:path*',
        destination: 'https://api.ask-resume.com/api/v1/:path*',
      },
    ];
  },
});

module.exports = nextConfig;
