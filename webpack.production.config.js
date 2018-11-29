const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const publicPath = '/assets/';

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/index.js'),
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
    })
  ]
};
