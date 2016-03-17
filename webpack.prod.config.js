const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/scss/default.scss',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'HelloWorld',
    libraryTarget: 'umd'
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("bundle.css", { allChucks: true })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', include: [ path.join(__dirname, 'src/') ] },
      { test: /\.(png|jpg|gif)$/, loader: "url?limit=10000&mimetype=image/png" },
      { test: /\.(s)*css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") }
    ]
  }
};
