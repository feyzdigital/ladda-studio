/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/services/misir-orgusu", destination: "/services/cornrows", permanent: true },
      { source: "/services/burgu-orgu", destination: "/services/twist", permanent: true },
    ];
  },
};

module.exports = nextConfig;
