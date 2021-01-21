const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

export default {
  client: {
    test: fileRegex,
    use: { loader: 'url-loader' },
  },
};
