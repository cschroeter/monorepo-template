/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@template/ui"]);

module.exports = withTM({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
