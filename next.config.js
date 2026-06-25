/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // fully static — no server required
  trailingSlash: true,     // /tools/slug/ → correct Netlify routing
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,     // required for static export (no image server)
  },
};

module.exports = nextConfig;
