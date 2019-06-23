const withOffline = require('next-offline');

const nextConfig = {
  distDir: '../../dist/functions/next',
};

module.exports = withOffline(nextConfig);
