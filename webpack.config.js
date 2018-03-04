var webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist/assets',
    publicPath: 'assets/',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /dist/],
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /dist/],
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            pligins: () => [require('autoprefixer')]
          }
        }]
      }
    ]
  }
}