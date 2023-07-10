const rewrites = require("./rewrites");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return rewrites;
  },
};

const withTM = require("next-transpile-modules")([
  "antd-mobile",
  "@portkey/did-ui-react",
]);

module.exports = withTM(nextConfig);
