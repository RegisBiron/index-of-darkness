const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV = (process.env.NODE_ENV === 'dev');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: IS_DEV,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, './postcss.config.js')
              }
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
      title: 'The Index of Darkness'
    })
  ],
};
