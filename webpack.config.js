const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './frontend.jsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.join(process.cwd(), 'public')
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
