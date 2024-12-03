/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    POSTMARK_API_CLIENT: process.env.POSTMARK_API_CLIENT,
  },
};

export default nextConfig;
