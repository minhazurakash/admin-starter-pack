import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: [
    "@ant-design",
    "@ant-design/icons",
    "rc-util",
    "rc-input",
    "rc-select",
    "rc-picker",
    "rc-pagination",
    "rc-table",
    "rc-tree",
  ],
};

export default nextConfig;
