import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠️ Allows production builds even if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  // Add other config options below if needed
};

export default nextConfig;
