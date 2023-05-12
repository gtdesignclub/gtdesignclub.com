/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./utils/loader.ts",
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
      },
    ],
  },
};

module.exports = nextConfig;
