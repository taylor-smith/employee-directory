var Webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
  'webpack-dev-server/client?http://127.0.0.1:8080/',
  'webpack/hot/only-dev-server',
  './client/js/app.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel'
      ]
    }]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
    // sourceMapFileName: 'sourcemaps.map'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
}