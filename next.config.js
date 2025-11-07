/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["huggingface.co", "images.unsplash.com"],
  },
}

module.exports = nextConfig
