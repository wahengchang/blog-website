const path = require('path');
const webpack = require('webpack');
// Generate html template
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clean bundle folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     cache: true,
      //     emitError: true,
      //     emitWarning: true,
      //     failOnError: true,
      //     failOnWarning: true,
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new HtmlWebpackPlugin({
      title: 'Blog',
      inject: 'head',
      author: 'Rukeith',
      template: 'client/index.html',
      hash: process.env.NODE_ENV === 'production',
      minify: {
        removeComments: process.env.NODE_ENV === 'production',
        collapseWhitespace: process.env.NODE_ENV === 'production',
        preserveLineBreaks: process.env.NODE_ENV === 'production'
      }
    })
  ]
};