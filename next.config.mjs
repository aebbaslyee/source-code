/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/source-code',
  images: { unoptimized: true }
};

export default nextConfig;