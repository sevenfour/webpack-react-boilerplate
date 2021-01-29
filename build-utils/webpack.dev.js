const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    open: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', './dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
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
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  }
};
