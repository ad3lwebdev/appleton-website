/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'appletonlittleparadise.com' },
    ],
  },
};

export default nextConfig;
