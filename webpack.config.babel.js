'use strict';

import webpack from 'webpack';
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
      {test: /\.html$/, loader: 'file?name=[name].[ext]'},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  }

};

export default config;
