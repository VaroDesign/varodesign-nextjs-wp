module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/html/about.html',
        permanent: true,
      },
    ]
  },
};
