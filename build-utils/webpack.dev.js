const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devtool: 'eval-source-map'
};
