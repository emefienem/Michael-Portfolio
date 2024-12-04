/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    EMAIL: process.env.EMAIL,
    PASS: process.env.PASS,
  },
};

export default nextConfig;
