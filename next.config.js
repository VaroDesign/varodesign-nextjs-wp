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
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/html/about.html',
        destination: '/about',
      },
    ]
  },
}