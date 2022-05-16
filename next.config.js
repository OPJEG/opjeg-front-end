const withOptimizedImages = require('next-optimized-images')

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  optimizeImages: false,
  images: {
    loader: 'custom',
  },
})

module.exports = nextConfig
