// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: false,
//   output: 'export',
//   images: {
//      unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.servicecnnekt.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   rewrites: async () => {
//     return [
//       {
//         source: "/basepath/:path*",
//         destination: "https://api.servicecnnekt.com/:path*",
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   reactStrictMode: false,
//   // output: 'export',
//   images: {
//     unoptimized: true,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.servicecnnekt.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
//   // ❌ Remove rewrites — not supported with 'output: export'
// };

// module.exports = nextConfig;


const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  // output: 'export',
  images: {
    unoptimized: true,
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
