import dotenv from 'dotenv';
dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

const devCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net chrome-extension:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com",
  "img-src 'self' data: https://placehold.co https://www.facebook.com https://www.google-analytics.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
  "frame-src 'self' https://www.googletagmanager.com"
].join('; ');

const prodCsp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.google.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com",
  "img-src 'self' data: https://placehold.co https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://www.gstatic.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
  "frame-src 'self' https://www.googletagmanager.com https://www.google.com"
].join('; ');

const nextConfig = {
  assetPrefix: isProd ? '/ur-royal-game/' : '',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'export',
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  generateBuildId: async () => `build-${Date.now()}`,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isProd ? prodCsp : devCsp
          },
        ],
      },
    ];
  },
  swcMinify: true,
};

export default nextConfig;
