module.exports = {
  async rewrites() {
    return [
      {
        source: '/html/about.html',
        destination: '/about',
      },
    ]
  },
};
