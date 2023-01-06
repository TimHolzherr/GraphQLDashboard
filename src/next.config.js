/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => {
    return [
      {
        source: '/graphql',
        destination: 'http://localhost:5252/graphql',
      },
    ];
  },
};

module.exports = nextConfig;
