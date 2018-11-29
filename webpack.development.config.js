const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const publicPath = '/assets/';

module.exports = {
  mode: 'development',
  entry: [
    `webpack-hot-middleware/client?path=${publicPath}__webpack_hmr&timeout=20000`,
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist/assets'),
    publicPath,
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
      filename: path.join(__dirname, 'dist/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
