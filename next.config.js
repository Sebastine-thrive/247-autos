// const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
// module.exports = withNextVideo(nextConfig);

const withVideos = require('next-videos')

module.exports = withVideos();