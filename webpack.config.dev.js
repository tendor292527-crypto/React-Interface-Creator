const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodePath = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const webpack = require('webpack')

const path = (dir) => nodePath.resolve(dir)

module.exports = {
  devtool: 'inline-source-map',
  context: path('./'),
  entry: [
    require.resolve('./.polyfills'),
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: path('dist'),
    pathinfo: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './template.html',
    }),
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loader: 'babel',
      include: path('src'),
    }, {
      test: /\.css$/,
      loader: 'style!css',
      include: path('src'),
    }, {
      test: /\.(ico|jpg|png)$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.(ttf|eot|svg)$/,
      loader: 'file',
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
