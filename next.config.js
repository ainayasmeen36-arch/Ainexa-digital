/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static export for Hostinger / VPS / any static host
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
