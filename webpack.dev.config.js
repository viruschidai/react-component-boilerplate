const path = require('path');
const webpack = require('webpack');

const include = [ path.resolve(__dirname, 'src/'), path.resolve(__dirname, 'examples/') ];

module.exports = {
  devtool: 'source-maps',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './examples/example'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', include },
      { test: /\.(png|jpg|gif)$/, loader: "url?limit=10000&mimetype=image/png" },
      { test: /\.(s)*css$/, loader: "style!css!sass" }
    ]
  }
};
