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
      '/talk/text': {
        target: 'https://milobella.com:10443',
        secure: false,
        changeOrigin: true
      },
      '/api/v1/talk/text': {
        target: 'https://milobella.com:10443',
        secure: false,
        changeOrigin: true
      },
      '/api/v1/abilities': {
        target: 'https://milobella.com:10443',
        secure: false,
        changeOrigin: true
      },
      '/users/authenticate': {
        target: 'https://milobella.com:10443',
        secure: true,
        changeOrigin: true
      },
    }
  },
});
