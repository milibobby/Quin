module.exports = {
  // other webpack configuration settings
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      buffer: require.resolve("buffer/"),
      url: require.resolve("url/"),
    },
  },
};
