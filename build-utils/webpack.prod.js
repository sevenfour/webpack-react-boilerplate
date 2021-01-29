const path = require('path');

const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: ''
            }
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(css-loader)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, '..', './dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 1200,
      height: 100,
      penthouse: {
        blockJSRequests: false
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: 'runtime'
    },
  },
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    publicPath: '/',
    filename: '[contenthash].bundle.js',
  }
};
