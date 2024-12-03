/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    POSTMARK_API_KEY: process.env.POSTMARK_API_KEY,
  },
};

export default nextConfig;
