const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { default: ImageminWebpackPlugin } = require('imagemin-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  stats: {warnings:false},
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
          // CopyWebpackPlugin mengabaikan folder hero dan logo yang tidak terkompresi yang berada di dalam folder images
          ignore: ['**/images/heros/**', '**/images/logo/**'],
          },
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new ImageminWebpackPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true,
        }),
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
