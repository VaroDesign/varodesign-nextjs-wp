module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about.html',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about.html',
        destination: '/abouto',
      },
    ]
  },
};
