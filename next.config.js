/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["https://imaginschool.herokuapp.com"],
  },
};

module.exports = nextConfig;
