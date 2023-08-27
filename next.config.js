/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/storyblokImageLoader.js",
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
