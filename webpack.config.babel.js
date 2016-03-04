'use strict';

import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import importCSS from 'postcss-import';
import simpleVars from 'postcss-simple-vars';
import hexRgba from 'postcss-hexrgba';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

const config = {

  context: path.join(__dirname, 'app'),

  entry: [
    'webpack/hot/only-dev-server',
    './index.html',
    './app.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {test: /\.html$/, loader: 'html-loader'},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.otf$/, loader: 'file-loader?name=fonts/[name].[ext]'},
      {test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?prefix=image/&limit=5000&context=./app/images'}
    ]
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: '*.*',
        to: path.join(__dirname, 'dist'),
        toType: 'file',
        ignore: ['*.css', '*.js', '*.html']
      }
    ])
  ],

  postcss: () => [importCSS, nested, simpleVars, hexRgba, autoprefixer]

};

export default config;
