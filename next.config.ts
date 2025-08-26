import type { NextConfig } from "next";
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    minimumCacheTTL: 600, // in seconds
  },
};

// if (process.env.NODE_ENV === 'development') {
//   await setupDevPlatform();
// }


export default nextConfig;
