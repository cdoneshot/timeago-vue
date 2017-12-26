const webpack = require('webpack')
const path = require('path')

module.exports = {
  target: 'web',
  profile: true,
  entry: {
    main: path.join(__dirname, './src/index.js')
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: 'timeago-vue.js',
    library: 'timeago-vue',
    libraryTarget: 'umd',
    umdNamedDefine: true
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
  plugins: [new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: false,
    compress: {
      warnings: false,
      drop_console: true,
      collapse_vars: true,
      reduce_vars: true,
    }
  })
  ]
}