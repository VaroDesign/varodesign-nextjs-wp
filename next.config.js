module.exports = {
  async rewrites() {
    return [
      {
        source: '/public/html/about.html',
        destination: '/about',
      },
    ]
  },
};
