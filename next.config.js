/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    apiGame: "/api/tic-tac-toe/play",
    MONGODB_URI:
      "mongodb+srv://workout:demo@atlascluster.xwtgigz.mongodb.net/test",
  },
};

module.exports = nextConfig;
