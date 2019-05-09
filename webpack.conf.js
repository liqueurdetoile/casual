'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    'casual': './src/casual.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'casual.min.js',
    libraryTarget: "umd"
  },
  resolve: {
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
    ],
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  }
};
