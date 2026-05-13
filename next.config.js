/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@react-three/fiber",
    "@react-three/drei",
    "three"
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;