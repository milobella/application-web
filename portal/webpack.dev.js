const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    // Send API requests on localhost to API server get around CORS.
    proxy: {
      '/api/talk': {
        target: 'https://milobella.com:10443/talk',
        secure: false,
        changeOrigin: true
      }
    }
  },
});
