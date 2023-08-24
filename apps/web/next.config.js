const { i18n } = require("./next-i18next.config");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['shared-ui', 'shared-lib'],
  trailingSlash: true,
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  i18n
});

module.exports = nextConfig;
