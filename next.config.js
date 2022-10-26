/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    apiGame: "/api/tic-tac-toe/play",
  },
};

module.exports = nextConfig;
