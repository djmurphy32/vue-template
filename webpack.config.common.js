const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackConfig = {
  entry: './src/web-client/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src/web-client'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        include: [path.resolve(__dirname, 'src/web-client')],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src/web-client')],
        use: [
          {
            loader: 'vue-style-loader',
            options: { sourceMap: true, shadowMode: false },
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 2 },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/web-client/styles/functions/_layout.scss',
                './src/web-client/styles/variables/_all.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new HtmlPlugin({ template: 'index.html', chunksSortMode: 'dependency' })],
}

module.exports = webpackConfig
