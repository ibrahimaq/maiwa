import type { NextConfig } from "next";

// Set to "/maiwa" when deploying to https://ibrahimaq.github.io/maiwa (see .github/workflows/deploy.yml)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // static site in /out, with out/index.html as the entry
  trailingSlash: true, // emits /about/index.html etc. so GitHub Pages serves every route
  basePath,
  images: { unoptimized: true }, // no image optimisation server on GitHub Pages
};

export default nextConfig;
