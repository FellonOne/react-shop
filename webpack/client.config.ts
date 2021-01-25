import path from 'path';
import { Configuration } from 'webpack';
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import StyleLoader from './loaders/css';
import FileLoader from './loaders/file';
import JavaScriptLoader from './loaders/js';

import ENV, { AppMode } from './env';

type Config = Configuration & {
  devServer: WebpackDevServerConfig;
};

export const config: Config = {
  entry: path.resolve('src', 'client.tsx'),
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx', '.json'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [FileLoader.client, JavaScriptLoader.client, StyleLoader.client],
  },
  devServer: {
    publicPath: '/',
    hot: true,
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:
        ENV.APP_MODE === AppMode.PRODUCTION
          ? '[name].[contenthash].css'
          : '[name].css',
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: 'static/images', to: 'images' }],
    }),
    new HtmlWebpackPlugin({
      publicPath: '/',
      template: path.resolve('src', 'index.html'),
    }),
  ],
};
