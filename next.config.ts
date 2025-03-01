/** @type {import('next').NextConfig} */
const nextConfig = {
  // For static sites deployed to Vercel, 'export' is usually better
  output: 'export',
  
  // Remove basePath if your app is at the root
  // basePath: '',
  
  // This is important - match it to your deployment path if not at root
  // Typically, leave it empty for Vercel deployments
  assetPrefix: '',
  
  images: {
    unoptimized: true
  },
  
  // This should be true for static exports
  trailingSlash: true,
  
  // Add this to handle the static file routing
  distDir: 'out'
}

module.exports = nextConfig