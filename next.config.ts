import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Turbopack ignores any stray
  // package-lock.json in a parent directory outside the repository.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
