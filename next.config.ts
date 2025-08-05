import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/lvecresidential.silvermine.ai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/lvecresidential.silvermine.ai' : '',
};

export default nextConfig;
