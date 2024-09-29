// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.balldraft.com',
          port: '', // Leave empty unless you have a specific port
          pathname: '/media/**', // Adjust this according to the path pattern of your image URLs
        },
      ],
    },
  };
  