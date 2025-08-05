const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.servicecnnekt.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/basepath/:path*",
        destination: "https://api.servicecnnekt.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
