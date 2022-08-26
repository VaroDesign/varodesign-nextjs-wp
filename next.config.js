module.exports = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/about.html',
  //     },
  //   ]
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  }
};