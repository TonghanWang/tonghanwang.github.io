/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;