import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "moviesshopco.vteximg.com.br",
    }
    ],
  },
};

export default nextConfig;
