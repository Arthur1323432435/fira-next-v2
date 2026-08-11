import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '192.168.1.13:3000'],
    },
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(process.cwd(), 'src');

    return config;
  },
};

export default nextConfig;