

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kkqcsotoauqenqjiloja.supabase.co",
      },
    ],
  },
};

export default nextConfig;
