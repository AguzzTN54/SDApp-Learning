const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  // output: {
  //   filename: 'js/[name].[chunkhash:8].js',
  //   chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
    ],
  },
  // externals: {
  //   // prettier-ignore
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  // },
})
