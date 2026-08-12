const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
module.exports = (phase) => ({
  output: 'export',
  // Keep the dev compiler isolated from the production static export. Running
  // `next build` must never invalidate a live development server's files.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'dist',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
