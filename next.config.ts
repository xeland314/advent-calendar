import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xeland314.github.io/advent-calendar",
        port: "",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
  output: "export", // Habilita la exportación estática
  basePath: "",
  reactStrictMode: true,
};

export default nextConfig;
