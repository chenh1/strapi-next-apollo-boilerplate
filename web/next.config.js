/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:1337"
  },
  images: {
    domains: [
      'storage.googleapis.com',
      'images.unsplash.com',
      'localhost'
    ],
  },
}

module.exports = nextConfig
