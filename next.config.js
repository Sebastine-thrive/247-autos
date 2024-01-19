/** @type {import('next').NextConfig} */

const withVideos = require("next-videos");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.sanity.io",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = withVideos(nextConfig);

