import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/Betty_portfolio-";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: isGitHubPages,
  },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
