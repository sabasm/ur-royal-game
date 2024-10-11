const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/ur-royal-game/' : '',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  output: 'export',
};

export default nextConfig;


