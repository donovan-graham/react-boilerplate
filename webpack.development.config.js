const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    compress: true,
    port: 9000,
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  output: {
    path: path.join(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename: '../index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
