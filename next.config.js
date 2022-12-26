/** @type {import('next').NextConfig} */

const url = process.env.NODE_ENV === 'development' ? undefined : '/music-app';

const nextConfig = {
  basePath: url,
  assetPrefix: url,
};

module.exports = nextConfig;
