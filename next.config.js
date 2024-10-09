// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.balldraft.com',
          port: '',
          pathname: '/media/**',
        },
        {
          protocol: 'http',
          hostname: 'api.balldraft.com',
          port: '',
          pathname: '/media/**',
        },
      ],
    },
  };
  