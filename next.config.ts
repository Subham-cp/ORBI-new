/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Enable modern formats (AVIF is much smaller than JPEG/PNG)
    formats: ['image/avif', 'image/webp'],
    
    // 2. Cache optimized images for longer (e.g., 1 year)
    minimumCacheTTL: 31536000, 
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

module.exports = nextConfig;