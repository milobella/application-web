const webpack =require("webpack");

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '.'),
  entry: './src/main.ts',
  output: {
    publicPath: '/',
    filename: 'portal.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        libraryTarget: "umd"
      }
    }),
    new HtmlWebpackPlugin({ template: './src/index.html'}),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
