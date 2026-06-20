import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      
    ],
  },
  allowedDevOrigins: ['192.168.0.108'],
};

export default nextConfig;
