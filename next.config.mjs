/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Disable experimental features that might cause issues
  experimental: {
    // Ensure we're not using any experimental features by default
    serverActions: true,
  },
  // Ensure proper transpilation
  transpilePackages: ['react-hot-toast', 'swiper'],
};

export default nextConfig; 