const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Path = require('path')
// const { InjectManifest } = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/Index.tsx',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.wasm', '.mjs', '.cjs', '.json'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['source-map-loader'],
      },
      {
        exclude: '/node-modules/',
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(jpe?g|png|svg|json|webp)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[folder]/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, 'public/'),
          to: '',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/stylesheet.css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    // new InjectManifest({
    //   swSrc: Path.join(process.cwd(), './src/sw.js'),
    // }),
  ],
}
