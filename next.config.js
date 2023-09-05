/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: false,
  },
  images: {
    deviceSizes: [640, 750, 828, 992, 1080, 1200, 1920, 2048, 3840],
    loader: "custom",
    loaderFile: "./src/utils/storyblokImageLoader.js",
  },
};

module.exports = nextConfig;
