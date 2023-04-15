/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },
  transpilePackages: ['shared-ui', 'shared-lib'],
};

module.exports = nextConfig;
