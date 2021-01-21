import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PostcssNested from 'postcss-nested';
import PostcssImport from 'postcss-import';

import ENV, { AppMode } from '../env';

export default {
  client: {
    test: /\.css$/,
    use: [
      ENV.APP_MODE == AppMode.PRODUCTION
        ? MiniCssExtractPlugin.loader
        : 'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [PostcssImport(), PostcssNested()],
          },
        },
      },
    ],
  },
};
