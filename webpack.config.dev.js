'use strict'

const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')

const webpackConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].chunk.js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true,
    },
  },
})

module.exports = webpackConfig
// module.exports = {
//   resolve: {
//     extensions: ['.ts', '.js', '.vue', '.json'],
//     alias: {
//       vue$: 'vue/dist/vue.esm.js',
//       '@': path.resolve(__dirname, 'src/web-client'),
//     },
//   },
//   devServer: {
//     historyApiFallback: true,
//     noInfo: true,
//   },
//   performance: {
//     hints: false,
//   },
//   devtool: '#eval-source-map',
// }

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"',
//       },
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false,
//       },
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true,
//     }),
//   ])
// }
