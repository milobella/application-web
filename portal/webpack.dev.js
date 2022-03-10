const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    // Send API requests on localhost to API server get around CORS.
    proxy: {
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
      '/api/v1/sentences': {
        target: 'https://milobella.com:10443',
        secure: false,
        changeOrigin: true
      },
      '/users/authenticate': {
        target: 'https://milobella.com:10443',
        secure: true,
        changeOrigin: true
      },
      '/spa/menu': {
        target: 'http://localhost:4200',
        secure: true,
        changeOrigin: true,
        pathRewrite: {"^/spa/menu" : ""}
      },
      '/spa/login': {
        target: 'http://localhost:4201',
        secure: true,
        changeOrigin: true,
        pathRewrite: {"^/spa/login" : ""}
      },
      '/spa/try-it': {
        target: 'http://localhost:4202',
        secure: true,
        changeOrigin: true,
        pathRewrite: {"^/spa/try-it" : ""}
      },
      '/spa/abilities': {
        target: 'http://localhost:4203',
        secure: true,
        changeOrigin: true,
        pathRewrite: {"^/spa/abilities" : ""}
      },
      '/spa/nlg': {
        target: 'http://localhost:4204',
        secure: true,
        changeOrigin: true,
        pathRewrite: {"^/spa/nlg" : ""}
      },
    }
  },
});
