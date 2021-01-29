const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      styles: path.resolve(__dirname, '..', './src/styles'),
      components: path.resolve(__dirname, '..', './src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|ico|jpeg|jpg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html')
    })
  ],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    publicPath: '/',
    filename: '[contenthash].bundle.js'
  }
};
