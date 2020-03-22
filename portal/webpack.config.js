const webpack = require('webpack')
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: resolve(__dirname, '.'),
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    // Send API requests on localhost to API server get around CORS.
    proxy: {
      '/api': {
         target: 'https://milobella.com/',
         secure: false,
         changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    })
  ]
}
