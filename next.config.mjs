/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.felixvemmer.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.bit.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.syncfusion.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'soshace.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.perfomatix.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kb.pavietnam.vn',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
