const webpack = require('webpack')
const path = require('path')

module.exports = {
  target: 'web',
  profile: true,
  entry: {
    "demo/demo": path.join(__dirname, './demo/index.js')
  },
  output: {
    path: path.join(__dirname, ''),
    filename: '[name].min.js',
  },
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    }
    ]
  },
  devServer: {
    port: 8080
  }
}