/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    legacyBrowsers: false, // ✅ Disable transpilation/polyfills for legacy browsers
  },
  swcMinify: true, // ✅ Enable SWC for better JS minification
}

export default nextConfig
