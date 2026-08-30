import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio.com' : '',
};

export default nextConfig;
