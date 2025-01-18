/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static site generation
  basePath: process.env.NODE_ENV === 'production' ? '/OPENSESAME' : '',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

module.exports = nextConfig