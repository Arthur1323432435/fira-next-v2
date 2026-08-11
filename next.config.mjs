/** @type {import('next').NextConfig} */
const nextConfig = {
  // Libera conexões de Server Actions e origens locais
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '192.168.1.13:3000'],
    },
  },
};

export default nextConfig;